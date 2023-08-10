import { useState, useEffect } from 'react';
import URLInput from './URLInput';
import ParameterInput from './ParameterInput';
import utmParams from '../assets/utm_params';
import Header from './Header';
import CopyButton from './CopyButton';
import LinkShortenButton from './LinkShortenButton';
import OpenQRModalButton from './OpenQRModalButton';
import QRmodal from './QRmodal';
import ResultLink from './ResultLink';
import isValidURL from '../mixins/isValidURL';

import { ILinkUpdater } from '../interfaces/interfaces';

const Main = (): JSX.Element => {

    interface ILinkObject {
        [key: string]: string;
    }

    const [url, setUrl] = useState<string>('https://www.example.com');
    const [resultLinkObject, setResultLinkObject] = useState<ILinkObject>({});
    const [resultLink, setResultLink] = useState<string>(url);

    const updateLink: ILinkUpdater = (parameterName: string, parameterValue: string): void => {
        setResultLinkObject((prevState) => {
            return {
                ...prevState,
                [parameterName]: cleanParameter(parameterValue)
            }
        });
    }

    // on component mount
    useEffect(
        () => M.AutoInit(), []
    );

    useEffect(
        () => {
            // if url is not started with http:// or https://, add https://
            let fixed_url: string = (url.startsWith('http') ? url : 'https://' + url).trim().replace(/[^a-z0-9+&@#/%?=~_|!:,.;-]/gi, '');
            if (!isValidURL(fixed_url)) {
                setResultLink('Invalid target link');
                return;
            }
            // if last symbol in url is / or ?, remove it
            fixed_url = removeTail(fixed_url);
            // add parameters to url
            setResultLink(removeTail(fixed_url + (hasQueryParameters(url) ? '&' : '?') + (Object.keys(resultLinkObject).length > 0 ? Object.keys(resultLinkObject).map((key) => {
                if (resultLinkObject[key].trim() !== '') return `${key}=${resultLinkObject[key]}`
            }).join('&') : '')));
        },
        [resultLinkObject, url]
    );

    const parametersInputs: JSX.Element[] = utmParams.map((parameter) => {
        return <ParameterInput key={parameter.name} setResultLink={updateLink} parameter={parameter} />
    });

    const hasQueryParameters = (url: string) => {
        try {
            const urlObject = new URL(url);
            const params = urlObject.searchParams;
            return params.toString().trim() !== '';
        } catch (error) {
            return false;
        }
    }

    const removeTail = (url: string): string => {
        if (url.endsWith('/') || url.endsWith('?') || url.endsWith('&')) {
            url = url.slice(0, -1);
        }
        return url;
    }

    const cleanParameter = (parameter: string): string => {
        // if parameter contains incorrect for URL parameters symbols, remove them
        return parameter.trim().replace(/[^a-z0-9+&@#/%?=~_|!:,.;-]/gi, '');
    }



    return (
        <>
            <Header header="Google Analytics Link Builder" />

            <ResultLink resultLink={resultLink} />

            <div className="container center-align section">

                <CopyButton text={resultLink} />

                <LinkShortenButton target={resultLink} setResultLink={setResultLink} />

                <OpenQRModalButton />

            </div>

            <div className="container section row flexbox">

                <URLInput setURL={setUrl} url={url} />
                
                {parametersInputs}

            </div>

            <QRmodal text={resultLink} />

        </>
    )
}

export default Main;
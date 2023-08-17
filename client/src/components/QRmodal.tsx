import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode-generator';

interface Props {
    text: string;
}

/**
 * Generates a QR modal component.
 *
 * @param {Props} text - The text to generate the QR code from.
 * @return {JSX.Element} The QR modal component.
 */
const QRmodal = ({ text }: Props) => {

    const [qrCodeImage, setQRCodeImage] = useState<JSX.Element>(<></>);
    const [svgTag, setSvgTag] = useState<string>('');

    useEffect(
        (): void => {
            const qr = QRCode(0, 'L');
            qr.addData(text);
            qr.make();
            const svgTag = qr.createSvgTag();
            setSvgTag(qr.createSvgTag());
            const jsxElement = React.createElement(
                'div',
                {
                    dangerouslySetInnerHTML: { __html: svgTag },
                    className: 'qr-wrapper'
                }
            );
            setQRCodeImage(jsxElement);
        },
        [text]
    );

    /**
     * Downloads an SVG file when the provided event is triggered.
     *
     * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e - The event that triggered the download.
     * @return {void} This function does not return a value.
     */
    const downloadSVG = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault()

        const svgBlob = new Blob([svgTag], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = "qr-code.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

    }

    return (
        <>
            <div id="qr-modal" className="modal">
                <div className="modal-content center">
                    {qrCodeImage}
                </div>
                <div className="modal-footer">
                    <a className="waves-effect waves-light btn" onClick={downloadSVG}>
                        Download
                        <i className="material-icons left">file_download</i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default QRmodal;
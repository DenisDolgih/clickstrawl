export default [
    {
        'name': 'utm_source',
        'description': 'Referrer, for example: google, newsletter4, billboard'
    },
    {
        'name': 'utm_medium',
        'description': 'Marketing medium, for example: cpc, banner, email'
    },
    {
        'name': 'utm_campaign',
        'description': 'Product, promotion, or slogan, for example: spring_sale, christmas_sale'
    },
    {
        'name': 'utm_term',
        'description': 'Identify paid search keywords. If you’re manually tagging paid keyword campaigns, you should also use utm_term to specify the keyword.'
    },
    {
        'name': 'utm_id',
        'description': 'Campaign ID. Used to identify a specific campaign or promotion. This is a required key for GA4 data import. Use the same IDs that you use when uploading campaign cost data.'
    },
    {
        'name': 'utm_content',
        'description': 'Used to differentiate similar content, or links within the same ad. For example, if you have two call-to-action links within the same email message, you can use utm_content and set different values for each so you can tell which version is more effective.'
    },
    {
        'name': 'utm_creative_format',
        'description': 'The format of the creative associated with your ad. For example, “image” or “video”.'
    },
    {
        'name': 'utm_marketing_tactic',
        'description': 'The marketing tactic for the ad. For example, “retargeting” or “action_based”.'
    },
];
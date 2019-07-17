# Funnel Chart

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.

### Description

This example shows funnel chart.

The chart can be created with a simple line of code.

```javascript
// Create a new Funnel chart.
const funnel = lightningChart().Funnel({ design: FunnelChartDesigns.LabelsOnSides })
```

After creating the Funnel Chart the value for it can be set simply.

```javascript
funnel
    // Set title.
    .setTitle( 'Customer contacts progression' )
    // Set Funnel chart slice mode.
    .setSliceMode( FunnelSliceModes.VariableHeight )
    .setSliceGap( 0 )
    .setHeadWidth( 95 )
    .setNeckWidth( 40 )
    .setLabelSide( FunnelLabelSide.Right )

// Data for slices
const data = [
    {
        name: 'Prospects',
        value: 2000
    },
    {
        name: 'Contacts',
        value: 1540
    },
    {
        name: 'Leads',
        value: 1095
    },
    {
        name: 'Customers',
        value: 549
    }
]
// Add data to the slices
const slices = data.forEach( ( slice ) => {
    funnel.addSlice( slice.name, slice.value )
} )
```

### API links

* Funnel Chart: [Funnel][],
* Collection of Funnel Chart implementations: [FunnelChartDesigns][],
* Options for selecting side of labels: [FunnelLabelSide][],
* Collection of slice labels implementation: [SliceLabelFormatters][],
* Collection of default color palletes: [ColorPalettes][],

### Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API][1] documentation can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lcjs).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

© Arction Ltd 2009-2019. All rights reserved.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://arction.com
[3]: https://stackoverflow.com/questions/tagged/lcjs?sort=newest
[4]: https://www.arction.com/support-services/
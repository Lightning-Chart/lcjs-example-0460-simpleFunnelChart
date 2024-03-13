/*
 * LightningChartJS example that shows the creation and styling of a Funnel chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { FunnelChartTypes, FunnelLabelSide, SliceLabelFormatters, lightningChart, FunnelSliceModes, LegendBoxBuilders, Themes } = lcjs

// Create a Funnel chart
const funnel = lightningChart()
    .Funnel({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
        type: FunnelChartTypes.LabelsOnSides,
    })
    .setTitle('Customer contacts progression')
    .setSliceMode(FunnelSliceModes.VariableHeight)
    .setSliceGap(0)
    .setHeadWidth(95)
    .setNeckWidth(40)
    .setLabelSide(FunnelLabelSide.Right)
    .setPadding({ bottom: 45 })

// Data for slices
const data = [
    {
        name: 'Prospects',
        value: 2000,
    },
    {
        name: 'Contacts',
        value: 1540,
    },
    {
        name: 'Leads',
        value: 1095,
    },
    {
        name: 'Customers',
        value: 549,
    },
]
// Add data to the slices
funnel.addSlices(data)

// Set formatter of Slice Labels
funnel.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

// Add LegendBox and define the position in the chart
const lb = funnel
    .addLegendBox(LegendBoxBuilders.HorizontalLegendBox)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.8,
    })
lb.add(funnel, { toggleVisibilityOnClick: false })

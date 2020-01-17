/*
 * LightningChartJS example that shows the creation and styling of a Funnel chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    FunnelChartTypes,
    FunnelLabelSide,
    SliceLabelFormatters,
    lightningChart,
    SolidFillPalette,
    FunnelSliceModes,
    ColorPalettes,
    LegendBoxBuilders,
    UIOrigins
} = lcjs

// Create a Funnel chart
const funnel = lightningChart().Funnel({ type: FunnelChartTypes.LabelsOnSides })
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
funnel.addSlices(data)

// Set formatter of Slice Labels
funnel.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

// Create warm Palette for Funnel (defines color of Slice filling)
const palette = SolidFillPalette(ColorPalettes.warm, data.length)
funnel.setSliceFillStyle(palette)

// Add LegendBox and define the position in the chart
const lb = funnel
    .addLegendBox(LegendBoxBuilders.VerticalLegendBox)
    .setPosition({ x: 0, y: 0 })
    .setOrigin(UIOrigins.LeftBottom)
    .setMargin(5)
lb.add(funnel, false)

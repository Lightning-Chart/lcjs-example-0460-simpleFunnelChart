/*
 * LightningChartJS example that shows the creation and styling of a Funnel chart.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { FunnelChartTypes, FunnelLabelSide, SliceLabelFormatters, lightningChart, FunnelSliceModes, Themes } = lcjs

const lc = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
const dashboard = lc.Dashboard({
    numberOfColumns: 2,
    numberOfRows: 1,
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
})

const funnel1 = dashboard
    .createFunnelChart({ columnIndex: 0, rowIndex: 0, type: FunnelChartTypes.LabelsOnSides })
    .setTitle('Customer contacts progression')
    .setLabelSide(FunnelLabelSide.Left)
    .setSliceMode(FunnelSliceModes.VariableWidth)

const funnel2 = dashboard
    .createFunnelChart({ columnIndex: 1, rowIndex: 0, type: FunnelChartTypes.LabelsOnSides })
    .setTitle('Customer contacts progression')
    .setLabelSide(FunnelLabelSide.Right)
    .setSliceMode(FunnelSliceModes.VariableHeight)

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

funnel1.addSlices(data)
funnel1.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

funnel2.addSlices(data)
funnel2.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

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
    theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    const smallView = Math.min(window.innerWidth, window.innerHeight) < 500
    if (!window.__lcjsDebugOverlay) {
        window.__lcjsDebugOverlay = document.createElement('div')
        window.__lcjsDebugOverlay.style.cssText = 'position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;z-index:99999;font:12px monospace;pointer-events:none'
        if (document.body) document.body.appendChild(window.__lcjsDebugOverlay)
        setInterval(() => {
            if (!window.__lcjsDebugOverlay.parentNode && document.body) document.body.appendChild(window.__lcjsDebugOverlay)
            window.__lcjsDebugOverlay.textContent = window.innerWidth + 'x' + window.innerHeight + ' dpr=' + window.devicePixelRatio + ' small=' + (Math.min(window.innerWidth, window.innerHeight) < 500)
        }, 500)
    }
    return t && smallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
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

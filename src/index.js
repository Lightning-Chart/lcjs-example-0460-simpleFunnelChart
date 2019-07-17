/**
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
    SolidFill, 
    FunnelSliceModes,  
    ColorPalettes,
    LegendBoxBuilders,
    UIOrigins
} = lcjs

// Create a Funnel chart
const funnel = lightningChart().Funnel( { type: FunnelChartTypes.LabelsOnSides } )
    .setTitle( 'Customer contacts progression' )
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

// Set formatter of Slice Labels
funnel.setLabelFormatter( SliceLabelFormatters.NamePlusValue )

// Create FillStyle Palette for Funnel (defines color of Slice filling)
const palette = ColorPalettes.warm( 4 )
// FillStyle Palette is a function which returns FillStyle based on index.
const fillStylePalette = ( i ) => new SolidFill().setColor( palette( i ) )
funnel.setSliceFillStyle(fillStylePalette )

// Add LegendBox and define the position in the chart
const lb = funnel
    .addLegendBox( LegendBoxBuilders.VerticalLegendBox )
    .setPosition( { x: 0, y: 0 } )
    .setOrigin( UIOrigins.LeftBottom )
    .setMargin( 5 )
lb.add( funnel, false )

var config = {
    style: 'mapbox://styles/vincentrhumbline/clci7ewl7003c14nbmkls5zsn',
    accessToken: 'pk.eyJ1IjoidmluY2VudHJodW1ibGluZSIsImEiOiJjbGNpNHZoam4wOGk5M29wZXFsaGdvdWViIn0.XvKO9DMeISCMCch_tNqUsg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Birds of the Texas Islands',
    subtitle: 'The coast of Texas is lined with bird colony islands, and traced with annual migration pathways. But what happens when the sea rises?',
    byline: 'Audubon Texas',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Texas Coast',
            image: './assets/images/tyler-moulton-LOclOrfq6XI-unsplash.jpg',
            description: 'The coast of Texas is lined with bird colony islands, and traced with annual migration pathways. But what happens when the sea rises?',
            location: {
                center: [-96.41804, 28.40959],
                zoom: 7.50,
                pitch: 51.35,
                bearing: -43.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Laguna Madre',
            image: './assets/images/ReddishEgret_RebeccaField.jpg',
            description: 'An ecosystem rich in biodiversity at the southern end of the Texas coast.',
            location: {
                center: [-97.16936, 26.22568],
                zoom: 10.80,
                pitch: 58.00,
                bearing: -61.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'reddishegret-b9o8cx',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Green Island',
            image: './assets/images/ReddishEgret_ChezyYusuf.jpg', 
            description: 'An important nesting island for the reddish egret, with upwards of two thousand pairs.',
            location: {
                center: { lon: -97.32465, lat: 26.39116 },
                zoom: 16.26,
                pitch: 37.00,
                bearing: -33.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Chester Island',
            image: './assets/images/brownpel.jpg',
            description: 'Chester Island provides crucial brown pelican nesting habitat; the islaand was a site of Audubon-managed pelican recovery, led by coastal warden Chester Smith.',
            location: {
                center: { lon: -96.35208, lat: 28.44282 },
                zoom: 13.67,
                pitch: 49.50,
                bearing: -1.31
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

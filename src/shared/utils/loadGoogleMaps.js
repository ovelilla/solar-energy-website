const loadGoogleMaps = (loaded, setLoaded) => {
    if (!loaded) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-10sRwh4Wgf7ob0x7bG2JK3M201X86QA&libraries=places&callback=initializeMap`;
        script.async = true;
        document.body.appendChild(script);
        setLoaded(true);
    }

    window.initializeMap = () => {};
};

export default loadGoogleMaps;
function(instance, properties, context) {

if(openLight.hasOwnProperty("initialize") && openLight.initialize==true){
    openLight.toggleMode();    
    console.log("toggled")
}else {
    console.log("init")
     openLight.init();
     openLight["initialize"] = true;
        openLight.toggleMode();    
}
    


}
class headerNavComponent{
    get cartLink(){
        return $("//span[text()='Cart']");
    }
}

export default new headerNavComponent();
function loadBadge(){
    const script = document.querySelector("script[badge='1']");
    if (script) {
        let tags = script.attributes.tags.nodeValue;
        try {
            tags = JSON.parse(tags);
            for (const _tag of tags) {
                const {tag,label,url,color="blue",dataPath,dataTemplate} = _tag;
                const img = document.querySelector(`[alt='${tag}']`);
                if(img&&url){
                    fetch(url).then((response)=>{
                        return response.json();
                    }).then(result=>{
                        const paths = dataPath.split(".");
                        try{
                            let data=result;
                            for (const path of paths){
                                data = data[path];
                            }
                            const value = dataTemplate?dataTemplate.replace("$data",data):data;
                            img.src=`https://img.shields.io/badge/${label}-${value}-${color}`;
                        }catch (e) {

                        }
                    });
                }
            }
        } catch (e) {

        }
    }
}

if(document.readyState==="complete"){
    loadBadge();
}else{
    window.addEventListener("load", () => {
        loadBadge();
    });
}

var weekList = [
    {label:"Week 1", url: "https://annmi-diva.github.io/WDD330/week 1/index.html"},
    {label:"Week 2", url: ""},
    {label:"Week 3", url: ""},
    {label:"Week 4", url: ""},
    {label:"Week 5", url: ""},
    {label:"Week 6", url: ""},
    {label:"Week 7", url: ""},
    {label:"Week 8", url: ""},
    {label:"Week 9", url: ""},
    {label:"Week 10", url: ""},
    {label:"Week 11", url: ""},
    {label:"Week 12", url: ""},
    {label:"Week 13", url: ""},
    {label:"Week 14", url: ""}
];
TableOfContents(weekList, "Weeklist");

///Creating the list
function TableOfContents(weekItems, listElementName) {
    let ol = document.getElementById(listElementName)
    //let ol = window.Weeklist;

    if (ol) {

        //loop through objects
        weekItems.forEach(element => {

            //creat anchor and set attributes
            let anchor = document.createElement("a");
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            anchor.target = "_blank";

            //creat list item and attach anchor
            let li = document.createElement("li");
            li.appendChild(anchor);

            ol.appendChild(li);

        });
    }
}
function tr_create(){
    var ele2 = document.createElement("tr")
    return ele2
}
function td_create(tagname1,content1){
    var ele3 = document.createElement(tagname1)
    ele3.innerHTML = content1
    return ele3
}
function th_create(tagname,attrname,attrvalue,content){
    var ele4 = document.createElement(tagname)
    ele4.setAttribute(attrname,attrvalue)
    ele4.innerHTML = content
    return ele4
}


var table = document.createElement("table");
table.className = "table"
var thead = document.createElement("thead")
thead.className = "thead-dark"
var r1 = tr_create();
var th1 = th_create("th","scope","col","#")
var th2 = th_create("th","scope","col","First")
var th3 = th_create("th","scope","col","Last")
var th4 = th_create("th","scope","col","Handle")

r1.append(th1,th2,th3,th4)
thead.append(r1)

var tbody = document.createElement("tbody");
var r2 = tr_create();
var thbody = th_create("th","scope","row","1");
var td1 = td_create("td","Mark");
var td2 = td_create("td","Otto");
var td3 = td_create("td","@mdo");

r2.append(thbody,td1,td2,td3)

var r3 = tr_create();
var thbody1 = th_create("th","scope","row","2");
var td4 = td_create("td","Jacob");
var td5 = td_create("td","Thornton");
var td6 = td_create("td","@fat");

r3.append(thbody1,td4,td5,td6)

var r4 = tr_create();
var thbody2 = th_create("th","scope","row","3");
var td7 = td_create("td","Larry");
var td8 = td_create("td","The Bird");
var td9 = td_create("td","@twitter");

r4.append(thbody2,td7,td8,td9)

tbody.append(r2,r3,r4)

table.append(thead,tbody)

document.body.append(table)



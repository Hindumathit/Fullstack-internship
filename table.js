var names=["Hindu","kavitha","Ambika"];
var age=[20,17,38];
var gender=["f","f","f"];
document.write("<table> <th>NAME</th><th>AGE</th><th>GENDER</th>");
for(var i=0;i< 3;i++)
{
    for(var j=0;j< names.length;j++)
    {
        document.write("<tr><td></td></tr>");
        document.write("<tr><td>${age(j)}</td>>/tr>");
        documnet.write("<tr><td>${gender(j)}</td></tr>");
    };
};
document.write("</table>");

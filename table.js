var names=["Hindu","kavitha","Ambika"];
var age=[20,17,38];
var gender=["f","f","f"];
document.write("<table> <th>NAME</th><th>AGE</th><th>GENDER</th>");
for(var i=0;i< 3;i++)
{
    document.write("<tr>");
    for(var j=0;j< names.length;j++)
    {
        document.write("<td>${name(j)}</td>");
        document.write("<td>${age(j)}</td>");
        documnet.write("<td>${gender(j)}</td>")
    };
    document.write("</tr>")
};
document.write("</table>");

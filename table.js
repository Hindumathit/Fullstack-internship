function newarray(){
    const person= [["hindu","kavi","ambika"],["20","17","34"],["vellore","chennai","chittoor"]];
    document.write("<table><th>name</th><th>age</th>");
    for(var i=0;i<person.length;i++)
    {
        document.write("<tr><td>"+person[0]+"</td></tr>");
    }
    document.write("</table>");
}
newarray();

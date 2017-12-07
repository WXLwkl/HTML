function table(row,col)
{

    document.write("<table style='border:1px solid yellow;'>");
    for(var r=0;r<row;r++)
    {
        document.write("<tr>");
         for(var c=0;c<col;c++)
         {
             document.write("<td style='border:1px solid red;'>行"+r+"列"+c+"</td>");
         }
        document.write("</tr>");
    }
    document.write("</table>");
}
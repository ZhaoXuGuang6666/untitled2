<%@ page import="Entity.User" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
<table border="1">
    <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>操作</th>
    </tr>
    <%
        for(User user:(List<User>) request.getAttribute("list")){
    %>
    <tr>
        <td><%= user.getId()%></td>
        <td><%= user.getName()%></td>
        <td>
            <a href="delete.action?id=<%= user.getId()%>">删除</a> |
            <a href="queryById.action?id=<%= user.getId()%>">修改</a>
        </td>
    </tr>
    <%
        }
    %>
</table>
<a href="add.jsp">添加</a>
</body>
</html>

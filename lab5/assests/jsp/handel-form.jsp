<%--
  Created by IntelliJ IDEA.
  User: AD
  Date: 10/14/2023
  Time: 1:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Handel form</title>
</head>
<body>
    <%
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String path = "hello.jsp";
        if(name != null && name.isBlank() || email != null && email.isBlank()) {
            path = "../././index.html";
        }
        RequestDispatcher rd = request.getRequestDispatcher(path);
        rd.forward(request, response);
    %>
</body>
</html>

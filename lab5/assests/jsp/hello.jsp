<%--
  Created by IntelliJ IDEA.
  User: AD
  Date: 10/14/2023
  Time: 2:21 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Hello jsp</title>
</head>
<body>
    <h1>Hello <%= request.getParameter("name") != null ? request.getParameter("name") : request.getParameter("email") %></h1>
</body>
</html>

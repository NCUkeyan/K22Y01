package com.zbw.web;

import com.zbw.mapper.TodoMapper;
import com.zbw.pojo.Do;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.InputStream;

@WebServlet("TodoServlet")
public class TodoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1.接收todo
        String todo =request.getParameter("todo");
        //1.2封装
        Do doo = new Do();
        doo.setTodo(todo);
        //2.调用Mapper
        //2.1获取SqlSessionFactory工厂
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        //2.2获取SqlSession对象
        SqlSession sqlSession = sqlSessionFactory.openSession();
        //2.3获取Mapper对象
        TodoMapper todoMapper = sqlSession.getMapper(TodoMapper.class);
        //2.4调用方法
        todoMapper.addTodo(doo);

        //3.结束动作
        sqlSession.commit();
        sqlSession.close();

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request,response);
    }
}

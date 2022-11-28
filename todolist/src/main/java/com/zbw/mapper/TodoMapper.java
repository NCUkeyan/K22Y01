package com.zbw.mapper;

import com.zbw.pojo.Do;
import org.apache.ibatis.annotations.Insert;

public interface TodoMapper {
    /**
     * 添加todo类
     * @param todo
     * @return
     */
    @Insert("insert into db1.todo_list values (null,#{todo}) ")
    void addTodo(Do todo);
}

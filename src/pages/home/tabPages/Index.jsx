import {NavLink, Outlet} from "react-router-dom";
import React, {useEffect, useRef} from "react";

const tabs = [
    {name: '关注',to: '/follow'},
    {name: '推荐',to: '/'},
    {name: '热榜',to: '/hot'},
    {name: '视频',to: '/zvideo'},
]
export default function TabPages(props) {
    const scrollRef = useRef(null)
    // 当ref 的div 到 顶的时候进行切换
    // 如何判断到顶了
    // 1.getBoundingClientRect()
    // throttle 来改善
    // 2.IntersectionObserver
    // 提供一种，异步观察目标元素预期主线元素或定级文档视窗 交叉状态的方法。
    useEffect(() => {
        var intersectionObserver = new IntersectionObserver(function (entries){
            props.onChange && props.onChange(entries[0].isIntersecting)
        })
        intersectionObserver.observe(scrollRef.current);

        return () => {
            intersectionObserver.unobserve(scrollRef.current);
            intersectionObserver = void 0;
        }
    }, []);
    return(
        <div className='w-full'>
            <div ref={scrollRef}></div>
            <nav className='flex border-b'>
                {
                    tabs.map((item) => <NavLink
                        key={item.to}
                        to={item.to}
                        className={({isActive}) => "whitespace-nowrap py-4 px-4 font-medium text-base transition-all "
                            + (isActive ? "text-blue-500":"text-black hover:text-blue-900")}
                    >{item.name}</NavLink>)
                }
            </nav>
            <Outlet/>
        </div>
    )
}
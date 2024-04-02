import commandListData from '../../../mock/commandList.mock'
import {useEffect, useRef, useState} from "react";

const CommandData = ({item}) => {
    const [selected,setSelected] = useState(false)
    const handleClick = (event)=> {
        event.preventDefault();
        setSelected(!selected)
    }
    return (<div className='flex flex-col items-start p-4 border-b'>
        <div className='h-auto flex justify-start'>
            <a className='font-bold text-lg leading-10' href='/'>
                {
                    item?.target?.question?.title || item?.target?.title
                }
            </a>
        </div>
        <div className='leading-6'>
            {
                selected?
                    <div dangerouslySetInnerHTML={{__html:item?.target?.content}}></div>
                    : <a href='/' onClick={handleClick}
                    className='cursor-pointer hover:text-gray-600 text-gray-900 line-clamp-2'>
                        {item?.target.excerpt.substring(0,90) + '...'}
                    <span className='text-base leading-7 text-blue-500'>阅读全文&gt;</span>
                    </a>
            }
        </div>
        <div className={' flex bg-white w-full ' + (selected ? ' bottom-0 shadow-sm border-t sticky ' : '')}>
            <button className='mr-4'>赞同</button>
            <button className='mr-4'>分享</button>
            <button className='mr-4'>收藏</button>
            <button className='mr-4'>喜欢</button>
            {
                selected && <div onClick={handleClick} className='font-base text-stone-500 p-2 m-2 inline-flex cursor-pointer'>
                    <span className='inline-flex'>收起</span>
                </div>
            }
        </div>
    </div>)
}

// 自定义hooks1
// function useObserver(fn,scrollRef) {
//     useEffect(() => {
//         var intersectionObserver = new IntersectionObserver(function (entries){
//             setTimeout(()=>{
//                 // 闭包陷阱
//                 fn(entries[0].isIntersecting)
//             },1000)
//
//         })
//         intersectionObserver.observe(scrollRef.current);
//
//         return () => {
//             intersectionObserver.unobserve(scrollRef.current);
//             intersectionObserver = void 0;
//         }
//     }, []);
// }
// 自定义hooks2
function useObserver(scrollRef) {
    const [list,setList] = useState(commandListData.slice(0,5))
    useEffect(() => {
        var intersectionObserver = new IntersectionObserver(function (entries){
            setTimeout(()=>{
                // 闭包陷阱    闭包拿不到最新的
                entries[0].isIntersecting && setList(list => [...list,...commandListData])

            },1000)

        })
        intersectionObserver.observe(scrollRef.current);

        return () => {
            if (scrollRef.current && intersectionObserver) {
                intersectionObserver.unobserve(scrollRef.current);
                intersectionObserver = void 0;
            }
        }
    }, []);
    return list
}
export default function CommandList() {
    const scrollRef = useRef(null)

    // 自定义hooks1
    // const [list,setList] = useState(commandListData.slice(0,5))
    // useObserver((bool)=>{
    //     bool && setList(list => [...list,...commandListData])
    // },scrollRef)

    // 自定义hooks2
    const list = useObserver(scrollRef)

    return (
        <div className='flex flex-col'>
            {
                list.map((item,index)=> <CommandData key={`${item.id}-${index}`} item={item}/> )
            }
            <div ref={scrollRef}>loading</div>
        </div>
    )
}
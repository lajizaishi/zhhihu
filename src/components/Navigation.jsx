import React,{Fragment} from "react";
import {NavLink} from 'react-router-dom';
import { Menu,Transition } from  '@headlessui/react';
import { BellIcon } from  '@heroicons/react/24/solid';

const navs = [
    { name: '首页', to: '/'},
    { name: '学习', to: '/education'},
    { name: '会员', to: '/xen'},
    { name: '发现', to: '/explore'},
    { name: '等你来答', to: '/question'},
]
const tabs = [
    {name: '关注',to: '/follow'},
    {name: '推荐',to: '/'},
    {name: '热榜',to: '/hot'},
    {name: '视频',to: '/zvideo'},
]
const Logo = () => <div className=' px-2 w-10'>
        <img src='/logo512.png' alt=''/>
</div>
const NavTab = ({navs}) => <div className=' mx-6 box-border'>
    {
        navs.map((item) => <NavLink
            key={item.to}
            to={item.to}
            className={({isActive}) => "hover:text-black mx-4 h-full py-4 text-gray-400 transition-all "
                + (isActive ? "font-extrabold text-black border-b-4 border-blue-500":"")}
        >{item.name}</NavLink>)
    }
</div>

const SearchTab = () => <div className='flex items-center'>
    <input className='w-96 h-10 border border-gray-100 px-4 rounded-full bg-grat-50' placeholder='学历真的很重要'/>
    <button className=' w-24 h-10 mx-4 py-2 px-4 bg-blue-500 text-white font-medium hover:bg-blue-600 rounded-full'>
        提问
    </button>
</div>
const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
]
const MenuAlarm = () => <div className='flex mr-10'>
    <Menu className='relative mt-3 inline-block text-left' as='div'>
        <Menu.Button>
            <BellIcon className='h-5 w-5 text-blue-500 fill-blue-500'/>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="'transform opacity-0 scale-95"
                enterTo="'transform opacity-100 scale-100"
                lcavc="transition case in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items>
                    {links.map((link) => (
                        /* Use the `active` state to conditionally style the active item. */
                        <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                                <a
                                    href={link.href}
                                    className={`${
                                        active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu.Button>
    </Menu>
</div>
export default function navigation(props) {
    return (
        <div className={` bg-white w-screen shadow-lg overflow-hidden ${props.className || ""}`}>
            <div className='mx-w-7xl mx-auto my-0 flex justify-center'>
                <div className={`h-14 flex-col relative duration-300 transition  ${ props.hide ? 'translate-y-0' : '-translate-y-14'}`}>
                    <div className=' h-14 flex justify-between items-center min-w-max'>
                        <div className='flex'>
                            <Logo/>
                            <NavTab navs={navs}/>
                        </div>
                        <SearchTab/>
                        <MenuAlarm/>
                    </div>
                    <div className=' h-14 flex justify-between items-center min-w-max'>
                        <div className='flex'>
                            <Logo/>
                            <NavTab navs={tabs}/>
                        </div>
                        <SearchTab/>
                    </div>
                </div>
            </div>
        </div>
    )
}
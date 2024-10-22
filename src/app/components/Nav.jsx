"use client"
import Link from 'next/link';
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import "./Nav.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Nav = () => {

    const container = useRef();
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    const tl=useRef();

    useGSAP(()=>{
        gsap.set(".menu-link-item-holder", {y:75});
        tl.current = gsap
            .timeline({paused:true})
            .to(".menu-overlay", {
                duration:0.25,
                zIndex:2,
                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease:"power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y:0,
                duration:1,
                stagger:0.1,
                ease:"power4.inOut",
                delay:-0.75,
            });
    }, {scope:container})

    useEffect(()=>{
        if(isMenuOpen){
            tl.current.play();
        }
        else{
            tl.current.reverse();
        }
    }, [isMenuOpen])



  return (
    <div className="menu-container" ref={container}>
        <div className="menu-bar">
            <div className="menu-logo">
                <Link href="/">CodeGrid</Link>
            </div>
            <div className="menu-open" onClick={toggleMenu}>
                <p >Menu</p>
            </div>
        </div>
        <div className="menu-overlay">
            <div className="menu-overlay-bar">
                <div className="manu-logo">
                    <Link href="/">CodeGrid</Link>
                </div>
                <div className="menu-close" onClick={toggleMenu}>
                    <p>Close</p>
                </div>
            </div>
            <div className="menu-close-icon">
                <p>chooseClose</p>
            </div>
            <div className="menu-copy">
                <div className="menu-links">
                    <div className="menu-link-item">
                        <div className="menu-link-item-holder">
                            <Link  href="/"  className='menu-link'>Home</Link>
                        </div>
                    </div>
                    <div className="menu-link-item">
                        <div className="menu-link-item-holder">
                            <Link href="/"  className='menu-link'>About</Link>
                        </div>
                    </div>
                    <div className="menu-link-item">
                        <div className="menu-link-item-holder">
                            <Link href="/" className='menu-link'>Contact</Link>
                        </div>
                    </div>
                    <div className="menu-link-item">
                        <div className="menu-link-item-holder">
                            <Link href="/" className='menu-link'>Hello</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-preview"></div>
        </div>
    </div>
  )
}

export default Nav
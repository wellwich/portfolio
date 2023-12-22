"use client";
import data from './data'
import links from './link';
import Card from './components/Card/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import React, { useState } from 'react';
export default function Home() {
  const [copySuccess, setCopySuccess] = useState(false);
  const m = "wellwich";
  const a = "reset410";
  const i = "8shield";
  const l = "net";
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <>
      <h2 className="text-4xl font-bold">WORKS</h2>
      <div className=" rounded bg-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 auto-rows-max gap-6 lg:p-16 p-4">
        {data.map(({ id, title, imageSrc }) => (
          <Card key={id} id={id} title={title} imageSrc={imageSrc}></Card>
        ))}
      </div>
      <h2 className='text-4xl font-bold'>LINK</h2>
      <div className='rounded bg-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 auto-rows-max gap-6 lg:p-16 p-4'>
        {links.map(({ id, title, url, icon }) => (
          <div key={id}><a href={url} target='_blank' className='block text-center p-4 hover:bg-gray-200 rounded'><FontAwesomeIcon icon={icon} className='text-[64px]' /></a></div>
        ))}
      </div>
      <h2 className='text-4xl font-bold'>CONTACT</h2>
      <div className='rounded bg-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 auto-rows-max gap-6 lg:p-16 p-4'>
        <div className='block text-center p-4 hover:bg-gray-200 rounded'>
          <button onClick={() => copyTextToClipboard(m + "." + a + "@" + i + "." + l)}>
            <p className='text-2xl'>📧</p>
            <p className='text-sm'>
              {copySuccess ? <> Copied<br />email address!</> : <>Click to copy<br />email address.</>}
            </p>
          </button>
        </div>
        <div className='block text-center p-4 hover:bg-gray-200 rounded'>𝕏<br />@wellwich</div>
      </div >
    </>
  )
}
config.autoAddCss = false

export const runtime = 'edge';
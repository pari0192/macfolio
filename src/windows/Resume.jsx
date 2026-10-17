import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { WindowControls } from '../components';
import { Download } from 'lucide-react';

import { Suspense, useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ErrorBoundary } from 'react-error-boundary';


pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dis@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="files/resume.pdf" download className='cursor-pointer' title='Download resume'>
                    <Download className='icon' />
                </a>
            </div>
            <ErrorBoundary fallback={<p>Failed to load PDF.</p>}>
                <Suspense fallback={<p>Loading document…</p>}>
                    <Document file="files/resume.pdf">
                        <Suspense fallback={<p>Loading page…</p>}>
                            <Page pageNumber={1}
                                renderTextLayer
                                renderAnnotationLayer />
                        </Suspense>
                    </Document>
                </Suspense >
            </ErrorBoundary >

        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
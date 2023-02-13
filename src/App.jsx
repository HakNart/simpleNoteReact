import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Notes/>}/>
                    <Route path="/welcome/:userName" element={<WelcomeComponent/>} />
                </Routes>
            </Layout>
            
        </BrowserRouter>
    );
}

export default App;

function WelcomeComponent() {
    const {userName} = useParams();
    return (
        <div className="WelcomeComponent hero min-h-[calc(100vh-4rem)] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        Hello {userName}
                    </h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum enim delectus tempore suscipit ipsa magnam tenetur, laborum, consequuntur distinctio impedit placeat minus atque veritatis unde, dolorem voluptatem nihil cum debitis.</p>
                </div>
            </div>
        </div>
    )
}

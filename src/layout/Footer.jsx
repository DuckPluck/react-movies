import React from 'react'

export function Footer() {
    return (
        <footer className="page-footer cyan accent-5">
          
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
          
        </footer>
    )
}
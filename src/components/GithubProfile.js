import React from 'react'
import './githubProfile.css'

function GithubProfile() {
    return (
        <>
            <div className="rounded mainContainer">
                <div className='navbarDiv'>
                    <div className='githubLogoDiv'>
                        <i className="fa-brands fa-github githubLogo"></i><span className='github'>GITHUB</span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#b6b6b6' }}>
                    <div className='secondMainDiv'>
                        <div className='leftMainDiv'></div>
                        <div className='rightMainDiv'>
                            <div className='searchDiv'>Search</div>
                            <div className='threeBlockMainDiv'>
                                <div className='smallDiv'></div>
                                <div className='smallDiv'></div>
                                <div className='smallDiv'></div>
                            </div>
                            <div className='bottomMainDiv'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GithubProfile
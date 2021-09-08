import React from 'react'
import HomepageCategories from '../../layout/HomepageCategories/HomepageCategories.layout'
import HomepageTopSection from '../../layout/HomepageTopSection/HomepageTopSection.layout'
import HomepageOffers from '../../layout/HomepageOffers/HomepageOffers.layout'
import About from '../../layout/About/About.layout'
import Footer from '../../layout/Footer/Footer.layout'

function Homepage() {
    return (
        <div>
            <HomepageTopSection />
            <HomepageCategories />
            <HomepageOffers />
            <About />
            <Footer />
        </div>
    )
}

export default Homepage

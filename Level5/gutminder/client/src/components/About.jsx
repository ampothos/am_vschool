import React from "react" 

export default function About() {
    return (
        <div className="about">
            <h2>Welcome to the GutMinder app!</h2>

            <p>You can use this to track the foods that you eat. You can rate how well your body processes them, depending on how you feel after eating.</p>

            <p>The ratings are a <span className="bold">three-tiered system</span>: 
            </p>

            <div className="about-tiers">
                <h4 className="tier">1</h4>
                <p>You feel worse or unwell after eating. Maybe your stomach is upset, it didn't sit well, or you feel jittery- either way, you're at least a little worse for the wear. </p>

                <h4 className="tier">2</h4>
                <p>You certainly dont feel <span className="italic">bad</span>, but you don't feel great either. You haven't noticed much difference either way, or you're just not sure.</p>

                <h4 className="tier">3</h4>
                <p>You've noticed some improvement! Maybe you feel nourished, refreshed, or energized. This food produces some good result.</p>

            </div>

            <p>You can also add comments to elaborate on your experience, and help yourself reflect on what fits, and what doesn't, later.</p>
        </div>
    )
}
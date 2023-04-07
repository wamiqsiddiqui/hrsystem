import hrapp from '/home/wamiq/Projects/my-app/src/hr.png'

export const DashboardPanel = () => {
    return (
        <div>
            <img className='logo' src={hrapp} /><div>
                <button className='panelModule'>Dashboard</button></div><div>
                <button className='panelModule'>Add Vacancy</button></div><div>
                <button className='panelModule'>Add Candidate</button></div><div>
                <button className='panelModule'>Add Hiring Session</button></div><div>
                <button className='panelModule'>Schedule Session</button></div><div>
                <button className='panelModule'>Manage Skills</button></div>
        </div>

    )
}
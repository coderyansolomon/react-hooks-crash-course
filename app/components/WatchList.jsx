'use client'

export default function WatchList(){
    return (
        <>
            <h3>Watch Wish List</h3>
            <div>
            <label htmlFor="add-watch">Add Watch</label>
            <input 
            style={{display: 'block'}} 
            type="text" 
            name="add-watch" 
            id="add-watch" 
            />
            </div>
            <ul>
                <li>
                    <div>Watch Title</div>
                    <button>Remove Watch</button>
                </li>
                <li>
                    <div>Watch Title</div>
                    <button>Remove Watch</button>
                </li>
                <li>
                    <div>Watch Title</div>
                    <button>Remove Watch</button>
                </li>
            </ul>
            <button>Clear Watches</button>
        </>
    )
}
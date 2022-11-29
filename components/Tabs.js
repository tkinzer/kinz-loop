export default function Tabs({tabs}) {
    return (
        <div className="footer">
            <div className="tabsContainer">
          {tabs && tabs.map((tab, idx) => {
          return <button key={idx}>{tab.name}</button>
})}
          </div>
        </div>
      )
}

export function Tab({name, route}) {

}
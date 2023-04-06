import {TabItem1,Button} from './styled'

const TabItem=(props)=>{
    const {eachTab,onTabId,isActive}=props
    const {displayText,tabId}=eachTab

     const onClickTabId =()=>{
        onTabId(tabId)
     }

    
    return(
        <TabItem1>
            <Button type="button" onClick={onClickTabId} isActive={isActive}>{displayText} </Button>
          
        </TabItem1>
    )

}

export default TabItem
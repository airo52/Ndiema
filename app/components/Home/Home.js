import React,{useState} from 'react';
import { View,StyleSheet} from 'react-native';
import SearchBa from '../commons/search/SearchBar';
import Screen from '../commons/screen/screen';
import FeaturedNews from '../commons/Featured/FeaturedNews';
import BreakingNews from '../BreakingNews/BreakingNews';
import LocalNews from '../LocalNews/LocalNews';
import PoliticalNews from '../political/politicalNews';
import TechNews from '../TechNews/techNews';
import EnterTainMentNews from '../Entertainment/Entertainment';
import fakeData from '../../../fakeData';
import ActivityIndicator from '../commons/activity/activityIndicator';

const Home = ()=>{
  const [isSearchFocused,setSearchFocused] = useState(false);
  
    const breakingNews = fakeData.filter(item => item.category === "breaking-news");
    const Tech = fakeData.filter(item => item.category === "tech");
 
    return(
      <>
          <ActivityIndicator visible={false}/>
        <Screen isSearchFocused={isSearchFocused} style={styles.container}>
     
       
           <SearchBa setSearchFocused={setSearchFocused}/>
          
          <FeaturedNews item={
            {
              id:'1',
              title:'Uhuru dee',
              desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              thumbnail:'https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ld3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
              category:'breaking-news',
              writerImage:"https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              writerName:'Willy',
              views:"25000",
              Likes:"400",
              date:'22 july 2020'
            }
          }/>
           <BreakingNews data={breakingNews}/>
           <LocalNews data={Tech} />
           <PoliticalNews data={Tech} />
           <TechNews data={Tech} />
        <EnterTainMentNews data={Tech}/>
        
  
      </Screen>
      </>
    )
}

const styles = StyleSheet.create({
    container:{
    

    },
    image:{
       
    }
})

export default Home;
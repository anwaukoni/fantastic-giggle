return movieLists.map(function(firstTree){
    
    return firstTree.videos.map(function(secondTree){
      return ({'id':secondTree.id, 'title': secondTree.title,
               'boxarts': secondTree.boxarts.filter(function(boxTree){
                 return boxTree.width== 150}).map(function(findUrl){
               		return findUrl.url})
       
      }); 
    });
    
    //return firstTree.videos.map(function(secondTree))
  
  }).concatAll() // Complete this expression!


return movieLists.map(function(movieList) {return movieList.videos.map(function(video) {
			return video.boxarts.
			  filter(function(boxart) {
				return boxart.width === 150;
			  }).
			  map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};
			  });
		  }).
		  concatAll();
	  }).
	  concatAll();

}  


return movieLists.concatMap(function(movieList){
  
    return movieList.videos.concatMap(function(videoProperty){
      
      return Array.zip((videoProperty.boxarts.reduce(function(a,b){
        if ((a.width*a.height)<(b.width*b.height)){
          return a
        }else{
          return b}      
      
      })),(videoProperty.interestingMoments.filter(function(mid){
      
      return mid.type==="Middle"; 
      })),function(interestingMoments,boxart){
   
        return {id:videoProperty.id, title:videoProperty.title, time:interestingMoments.time, url: boxart.url}
      })
    
    
    })
  
  })

   return lists.map(function(list){
    return {name:list.name, 
            
            videos: videos.filter(function(identification){
            
              return (indentification.listId === list.id)
            }).map(function(show){
            
              return (id: show.id, title: show.title)
            })
     }
    
  })
Exercise 26
  return lists.map(function(list){
    return {name:list.name, 
            
            videos: videos.filter(function(videoFilter){
            				
                     return videoFilter.listId==list.id
            				
                   	}).concatMap(function(videoFilter){
                    		return Array.zip(
                             bookmarks.filter(function(bookMark){
                             return bookMark.videoId==videoFilter.id
                            }),
                             boxarts.filter(function(boxArt){
                             
                            	return boxArt.videoId==videoFilter.id
                             
                            }).reduce(function(min,cur){
                             if((min.width*min.height)<(cur.height*cur.width)){
                             
                             	return min;
                            
                            		}else{
                             
                             			return cur;
                            			}
                            }),
                                function(bookMark, boxArt){
                            			return {id: videoFilter.id, title: videoFilter.title, 
                             				time:bookMark.time, boxart:boxArt.url
                            			}
            										
                        });
           
            
           }
    
  });
}





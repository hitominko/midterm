var findFirstEvenNumber= function(a){
	if(a.length==0){
		return null;
	}
	var b=0;
	while(b<a.length){
		if(a[b]%2==0){
			return a[b];
			break;
		}
		b=b+1;
	}
} 

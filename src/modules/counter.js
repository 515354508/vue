export default{
	namespaced: true,
	state: {
		goods:[
			{
				id:'0',
				text:'预售屈臣氏牌纯棉洁面巾',
				address:'广东中山',
				type:'包邮',
				price:'536.00',
				onlinePrice:' 199.60',
				cover:'./static/images/a01_big.jpg',
				poster:'a01',
				color:'#e8e8e8',
				images:[
					'./static/images/a01.jpg',
					'./static/images/a02.jpg',
					'./static/images/a03.jpg',
					'./static/images/a04.jpg',
					'./static/images/a05.jpg',
				],
				thumbnails:[
					'./static/images/a01_big.jpg',
					'./static/images/a02_big.png',
					'./static/images/a03_big.png',
					'./static/images/a04_big.png',
					'./static/images/a05_big.png',
				],
			},
			{
				id:'1',
				text:'预售稚优泉腮红',
				address:'北京朝阳',
				type:'包邮',
				price:'102.00',
				onlinePrice:' 200',
				cover:'./static/images/e01_big.png',
				poster:'a01',
				color:'#e8e8e8',
				images:[
					'./static/images/e01.jpg',
					'./static/images/e02.jpg',
					'./static/images/e03.jpg',
					'./static/images/e04.jpg',
					'./static/images/e05.jpg',
				],
				thumbnails:[
					'./static/images/e01_big.png',
					'./static/images/e02_big.png',
					'./static/images/e03_big.png',
					'./static/images/e04_big.png',
					'./static/images/e05_big.png',
				]
			},
			{
				id:'2',
				text:'预售L.Agirl洛杉矶辣妹子腮红',
				address:'美国',
				type:'包邮',
				price:'59.00',
				onlinePrice:' 300.60',
				cover:'./static/images/c01_big.png',
				poster:'a01',
				color:'#e8e8e8',
				images:[
					'./static/images/c01.jpg',
					'./static/images/c02.jpg',
					'./static/images/c03.jpg',
					'./static/images/c04.jpg',
					'./static/images/c05.jpg',
				],
				thumbnails:[
					'./static/images/c01_big.png',
					'./static/images/c02_big.png',
					'./static/images/c03_big.png',
					'./static/images/c04_big.png',
					'./static/images/c05_big.png',
				]
			},
			{
				id:'3',
				text:'丝芙兰眉笔',
				address:'广东广州',
				type:'包邮',
				price:'89.00',
				onlinePrice:' 110.60',
				cover:'./static/images/d01_big.png',
				poster:'a01',
				color:'#e8e8e8',
				images:[
					'./static/images/d01.jpg',
					'./static/images/d02.jpg',
					'./static/images/d03.jpg',
					'./static/images/d04.jpg',
					'./static/images/d05.jpg',
					
				],
				thumbnails:[
					'./static/images/d01_big.png',
					'./static/images/d02_big.png',
					'./static/images/d03_big.png',
					'./static/images/d04_big.png',
					'./static/images/d05_big.png',
				]
			},
		],
		//购物车
		added:[]
	},
	getters: {
		cartProducts : state=>{
			return state.added.map(({id,num})=>{	
				let product = state.goods.find( item => item.id == id )	
				// console.info('product',product)
				return {
					id : product.id,
					name : product.text,	
					price : product.price,	
					num,	
					total_num : (product.price*num)	
				}
	
			})
		},
		totalPrice:(state,getters)=>{
			let total = 0;	
			getters.cartProducts.forEach( item => {	
				total += item.price * item.num	
			})	
			return total;
		},
		totalNum : (state,getters)=>{
			let total = 0;
			getters.cartProducts.forEach( item => {
				total += item.num
			})	
			return total;	
		},
	},	
	mutations: {
		//加入购物车
		ADD_TO_CART( state, {id} ) {
			let record = state.added.find( item => item.id == id );
			if(!record){
				state.added.push({
					id,
					num:1
				})
			}else {
				record.num++
			}
		},
		//购物车商品数量改变
		NUM_CHANGE( state, {id,value} ) {
			state.added.forEach( ( item, index ) => {
				if( item.id == id ){	
					item.num = value;	
				}	
			});	
		},
		//删除购物车的指定的商品
		DELETE( state, product ){
			//console.info(state,product)
			state.added.forEach( ( item, index ) => {	
				if( item.id == product.id ){	
					//console.info( item )	
					//找到index的下标值	
					state.added.splice( index, 1 );	
				}	
			})	
		},
		//清空购物车
		CLEAR( state ){
			state.added = []	
		}	
	}, 
	actions: {
		addToCart({ commit },product) {
			commit('ADD_TO_CART',{	
				id:product.id	
			})	
		},
		numChange({ commit }, data) {
			commit('NUM_CHANGE',{
				id:data.id,
				value:data.value	
			})	
		},
		//删除购物车的指定的商品
		delProduct({commit},product){
			commit('DELETE',product)
		},
		//清空购物车
		clearAllCart({commit}){
			commit('CLEAR')
		}
	}
}
const template=/*html*/`
    <table class="table table-success table-striped table table-hover">
        <thead>
            <tr>
                <th>index</th>
                <th>제품명</th>
                <th>가격</th>
            </tr>   
        </thead>
        <tbody>
            <tr :key="i" v-for="(prod,i) in prods">
                <td>{{i}}</td>
                <td>{{prod.prodNm}}</td>
                <td v-text="prod.prodPrice"></td>            
            </tr>
        </tbody>
    </table>
`;
export default{
    template,
    data(){
        return {
            prods : [{prodNm:'키보드',prodPrice:2000},
                    {prodNm:'마우스',prodPrice:3000},
                    {prodNm:'모니터',prodPrice:4000}
            ]
        }
    },
    methods:{

    }
}
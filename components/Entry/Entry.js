import React from 'react';
import css from './Entry.scss';

class Entry extends React.Component{

    render(){
        return (
            <div className={css.entry} data-eid="1">
                <div className={css.entryItem}>
                    <div className={css.entryText}>
                        <p>annemin takıp çıkarmalı silikonlu memeleri var. çok garip. kullanıldığında biçimli dursalar da
                            dokunulduğunda sanki yoğun kıvamda
                            bir şey varmış gibi bir his bırakıyor insana. dokunduğum ne ki diyor insan.</p>

                        <p>bir sabah uyandığımda annem gelmiş "bak memelerim nasıl?" demişti. bir de arsızca dokunabilir miyim
                            demiştim de annem elimi tuttuğu gibi silikonlu memesine götürmüştü.
                            eskiden olsa döverdi de şimdi artık ses çıkarmıyor.</p>

                        <p>ben de meme olmadığı için evin içinde bazen ayna karşısında acaba nasıl olurdu diye annemden
                            izinsiz çaktırmadan takıp takıp bakıyorum. gövdemin biçimi gereği maalesef
                            hiç yakışmadı. ancak sütyen içinde giyindiğinde aynı görüntüyü vermiyor tabii. şu sıralar evin
                            mevzusu meme estetiği yaptırmak. annem ısrarla meme istese de doktorlar
                            pek tavsiye etmiyor. ben de istemiyorum açıkçası. bunun da ameliyatı, bakımı, gerekli işlemleri
                            yorucu.</p>

                        <p>ilerde ben silikon meme yaptırır mıyım? hayır. asıllarıyla anlaşabilirim pekala.</p>
                    </div>
                    <div className={css.entryMeta}>
                        <div className={css.entryMetaLeft}>
                            <a href="#"><i className="icon-like" data-toggle="tooltip" data-placement="bottom" data-title="ver şukuyu" data-original-title="" title=""/> </a>
                            <a href="#"><i className="icon-dislike" data-toggle="tooltip" data-placement="bottom" data-title="verme şukuyu" data-original-title="" title=""/> </a>
                            <a href="#"><i className="icon-heart" data-toggle="tooltip" data-placement="bottom" data-title="kalp" data-original-title="" title=""/> </a>
                            <a href="#"><i className="icon-pie-chart" data-toggle="tooltip" data-placement="bottom" data-title="kaleyi bulan şut" data-original-title="" title=""/> </a>
                        </div>
                        <div className={css.entryMetaRight}>
                            <a href="#">#5156156</a>
                            <a href="#"><strong>karamürselli deli hamdi</strong> — 3 ay önce</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Entry;
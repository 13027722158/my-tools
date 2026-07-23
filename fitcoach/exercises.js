const EXERCISES = [
  // ==================== 胸部 chest ====================
  {
    id: 'bench_press',
    name: '杠铃卧推',
    category: 'chest',
    categoryName: '胸部',
    equipment: '杠铃+卧推架',
    difficulty: '初级',
    muscle: '胸大肌、三角肌前束、肱三头肌',
    sets: '4组 × 8-12次',
    rest: '60-90秒',
    calories: 80,
    steps: [
      '躺在卧推凳上，双脚踩实地面，眼睛正对杠铃杆',
      '双手握杠，握距略宽于肩，收紧肩胛骨',
      '吸气，控制杠铃缓慢下放至胸口（乳头附近）',
      '呼气，发力将杠铃推起至起始位置，手臂自然伸直'
    ],
    tips: '保持肩胛骨收紧，下放时控制速度，不要弓背过度',
    demo: '🏋️'
  },
  {
    id: 'dumbbell_bench_press',
    name: '哑铃卧推',
    category: 'chest',
    categoryName: '胸部',
    equipment: '哑铃+卧推凳',
    difficulty: '初级',
    muscle: '胸大肌、三角肌前束、肱三头肌',
    sets: '4组 × 8-12次',
    rest: '60-90秒',
    calories: 75,
    steps: [
      '坐在卧推凳上，双手持哑铃放在大腿上，逐个将哑铃举至肩部',
      '身体后躺，将哑铃举至胸口两侧，掌心朝脚的方向',
      '吸气，控制哑铃缓慢下放至胸���两侧',
      '呼气，发力将哑铃推起至起始位置，注意不要让哑铃相互碰撞'
    ],
    tips: '哑铃下放幅度可以比杠铃更低，拉伸感更强，注意保持手腕中立',
    demo: '🏋️'
  },
  {
    id: 'incline_dumbbell_press',
    name: '上斜哑铃卧推',
    category: 'chest',
    categoryName: '胸部',
    equipment: '哑铃+上斜卧推凳',
    difficulty: '初级',
    muscle: '胸大肌上束、三角肌前束、肱三头肌',
    sets: '4组 × 8-12次',
    rest: '60-90秒',
    calories: 75,
    steps: [
      '将卧推凳调至上斜30-45度角，坐在凳上持哑铃于肩部两侧',
      '身体后靠，将哑铃举至胸口上方，掌心朝前',
      '吸气，控制哑铃缓慢下放至上胸部两侧',
      '呼气，发力将哑铃推起至起始位置'
    ],
    tips: '角度不宜过大（不超过45度），否则肩部参与过多，重点感受上胸发力',
    demo: '🏋️'
  },
  {
    id: 'pec_deck_fly',
    name: '蝴蝶机夹胸',
    category: 'chest',
    categoryName: '胸部',
    equipment: '蝴蝶机',
    difficulty: '初级',
    muscle: '胸大肌',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 50,
    steps: [
      '调整蝴蝶机座椅高度，使手柄与胸部齐平',
      '坐在机器上，背部贴紧靠背，前臂靠在手柄垫上',
      '呼气，用胸部发力将两侧手柄向中间合拢',
      '吸气，缓慢回到起始位置，感受胸部充分拉伸'
    ],
    tips: '全程保持挺胸收腹，手臂只是"传递"力量，发力点在胸肌',
    demo: '🦋'
  },
  {
    id: 'cable_crossover',
    name: '绳索十字夹胸',
    category: 'chest',
    categoryName: '胸部',
    equipment: '龙门架绳索',
    difficulty: '中级',
    muscle: '胸大肌',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 55,
    steps: [
      '将龙门架两侧滑轮调至高位，双手各握一个D型手柄',
      '站在龙门架中间，身体微前倾，双手向两侧打开',
      '呼气，用胸部发力将双手在身前交叉合拢',
      '吸气，控制绳索缓慢回到起始位置'
    ],
    tips: '手肘微曲固定不变，顶峰收缩时停顿1秒，想象用胸部"拥抱"',
    demo: '🤗'
  },
  {
    id: 'push_up',
    name: '俯卧撑',
    category: 'chest',
    categoryName: '胸部',
    equipment: '徒手',
    difficulty: '初级',
    muscle: '胸大肌、三角肌前束、肱三头肌、核心',
    sets: '4组 × 10-20次',
    rest: '45-60秒',
    calories: 40,
    steps: [
      '双手撑地，间距略宽于肩，身体保持一条直线',
      '收紧核心，夹紧臀部，不要塌腰或撅臀',
      '吸气，弯曲手臂将身体下放至胸部接近地面',
      '呼气，发力将身体推起至起始位置'
    ],
    tips: '新手可先做跪姿俯卧撑，核心全程保持紧绷，不要低头',
    demo: '💪'
  },

  // ==================== 背部 back ====================
  {
    id: 'lat_pulldown',
    name: '高位下拉',
    category: 'back',
    categoryName: '背部',
    equipment: '高位下拉机',
    difficulty: '初级',
    muscle: '背阔肌、大圆肌、肱二头肌',
    sets: '4组 × 8-12次',
    rest: '60-90秒',
    calories: 70,
    steps: [
      '调整座椅高度，使大腿被挡板固定，双手宽握杠铃杆',
      '挺胸收腹，身体微后倾，肩胛骨下沉',
      '呼气，将横杆拉至锁骨下方，肘部向下向后运动',
      '吸气，控制横杆缓慢回到起始位置，充分拉伸背部'
    ],
    tips: '下拉时先沉肩再发力，想象用手肘往下拉，而不是用手臂硬拉',
    demo: '🏋️'
  },
  {
    id: 'seated_row',
    name: '坐姿划船',
    category: 'back',
    categoryName: '背部',
    equipment: '坐姿划船机',
    difficulty: '初级',
    muscle: '背阔肌、菱形肌、斜方肌中下束、肱二头肌',
    sets: '4组 × 8-12次',
    rest: '60-90秒',
    calories: 65,
    steps: [
      '坐在划船机上，双脚踩实踏板，膝盖微曲',
      '双手握住手柄，挺胸收腹，背部保持平直',
      '呼气，将手柄拉至腹部，肘部贴近身体向后拉',
      '吸气，控制手柄缓慢回到起始位置，感受背部拉伸'
    ],
    tips: '拉时夹紧肩胛骨，不要含胸弓背，手臂尽量贴近身体',
    demo: '🚣'
  },
  {
    id: 'barbell_row',
    name: '杠铃划船',
    category: 'back',
    categoryName: '背部',
    equipment: '杠铃',
    difficulty: '中级',
    muscle: '背阔肌、菱形肌、斜方肌、肱二头肌',
    sets: '4组 × 8-10次',
    rest: '90秒',
    calories: 75,
    steps: [
      '双脚与肩同宽，微屈膝，髋部铰链前倾至上半身接近水平',
      '双手正握杠铃，握距略宽于肩，背部保持平直',
      '呼气，将杠铃拉至下腹部，肘部向上向后运动',
      '吸气，控制杠铃缓慢下放至手臂自然伸直'
    ],
    tips: '全程保持背部平直不弓背，核心收紧保护腰椎，新手可用较轻重量',
    demo: '🏋️'
  },
  {
    id: 'dumbbell_single_arm_row',
    name: '哑铃单臂划船',
    category: 'back',
    categoryName: '背部',
    equipment: '哑铃+卧推凳',
    difficulty: '初级',
    muscle: '背阔肌、菱形肌、肱二头肌',
    sets: '4组 × 8-12次（每侧）',
    rest: '60秒',
    calories: 60,
    steps: [
      '单膝跪在卧推凳上，同侧手撑住凳面，上身前倾与地面平行',
      '另一只手持哑铃自然下垂，背部保持平直',
      '呼气，将哑铃拉至腰侧，肘部贴近身体向后上方拉',
      '吸气，控制哑铃缓慢下放至起始位置'
    ],
    tips: '拉时想象手肘朝天花板方向运动，不要扭转身体，核心保持稳定',
    demo: '🏋️'
  },
  {
    id: 'face_pull',
    name: '面拉',
    category: 'back',
    categoryName: '背部',
    equipment: '绳索+绳索手柄',
    difficulty: '初级',
    muscle: '三角肌后束、斜方肌中下束、菱形肌',
    sets: '4组 × 15-20次',
    rest: '45-60秒',
    calories: 45,
    steps: [
      '将绳索调至面部高度，双手握住绳索两端',
      '站直，双臂向前伸直，身体微后倾',
      '呼气，将绳索拉向面部两侧，肘部向两侧打开向外旋转',
      '吸气，缓慢回到起始位置'
    ],
    tips: '重量不用太大，注重后束和肩胛的收缩感，对改善体态很有帮助',
    demo: '😮'
  },
  {
    id: 'straight_arm_pulldown',
    name: '直臂下拉',
    category: 'back',
    categoryName: '背部',
    equipment: '龙门架绳索+直杆',
    difficulty: '初级',
    muscle: '背阔肌、大圆肌、胸大肌下束',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 50,
    steps: [
      '将绳索滑轮调至高位，双手正握直杆，站距与肩同宽',
      '微屈膝，身体微前倾，手臂保持伸直（不锁死）',
      '呼气，用背部发力将杆向下压至大腿前侧',
      '吸气，控制杆缓慢回到起始位置，感受背阔肌拉伸'
    ],
    tips: '手臂始终保持微曲固定，发力点在背阔肌而非三头肌',
    demo: '🏋️'
  },

  // ==================== 肩膀 shoulders ====================
  {
    id: 'dumbbell_shoulder_press',
    name: '哑铃推举',
    category: 'shoulders',
    categoryName: '肩膀',
    equipment: '哑铃+座椅',
    difficulty: '初级',
    muscle: '三角肌前束、三角肌中束、肱三头肌',
    sets: '4组 × 8-12次',
    rest: '60-90秒',
    calories: 70,
    steps: [
      '坐在有靠背的凳子上，双手持哑铃举至肩部两侧，掌心朝前',
      '挺胸收腹，背部贴紧靠背，双脚踩实地面',
      '呼气，发力将哑铃向上推举至头顶上方，手臂自然伸直',
      '吸气，控制哑铃缓慢下放至肩部起始位置'
    ],
    tips: '推举时不要过分后仰，下放至肩部即可，保护肩关节',
    demo: '🏋️'
  },
  {
    id: 'lateral_raise',
    name: '侧平举',
    category: 'shoulders',
    categoryName: '肩膀',
    equipment: '哑铃',
    difficulty: '初级',
    muscle: '三角肌中束',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 40,
    steps: [
      '双脚与肩同宽站立，双手持哑铃于身体两侧，掌心朝内',
      '微屈肘，挺胸收腹，身体保持中立',
      '呼气，将哑铃向两侧平举至与肩同高',
      '吸气，控制哑铃缓慢下放至起始位置'
    ],
    tips: '重量不宜过大，小重量多次数效果更好，想象倒水的感觉',
    demo: '🤸'
  },
  {
    id: 'front_raise',
    name: '前平举',
    category: 'shoulders',
    categoryName: '肩膀',
    equipment: '哑铃',
    difficulty: '初级',
    muscle: '三角肌前束',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 40,
    steps: [
      '双脚与肩同宽站立，双手持哑铃于大腿前方，掌心朝后',
      '挺胸收腹，手臂自然伸直（微曲）',
      '呼气，将哑铃向前平举至与肩同高',
      '吸气，控制哑铃缓慢下放至起始位置'
    ],
    tips: '不要借助身体晃动的惯性，动作要慢且控制好，可交替单臂做',
    demo: '🤸'
  },
  {
    id: 'reverse_pec_deck',
    name: '反向蝴蝶机',
    category: 'shoulders',
    categoryName: '肩膀',
    equipment: '蝴蝶机（反向使用）',
    difficulty: '初级',
    muscle: '三角肌后束、斜方肌中下束、菱形肌',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 40,
    steps: [
      '调整蝴蝶机座椅，面向靠背坐好（反向坐）',
      '双手握住手柄或前臂贴垫，胸部贴紧靠背',
      '呼气，用后束发力将两侧手柄向后打开',
      '吸气，缓慢回到起始位置，感受后束拉伸'
    ],
    tips: '重量适中，注重后束收缩感，不要用大重量猛甩',
    demo: '🦋'
  },
  {
    id: 'barbell_shoulder_press',
    name: '杠铃推举',
    category: 'shoulders',
    categoryName: '肩膀',
    equipment: '杠铃+推举架',
    difficulty: '中级',
    muscle: '三角肌前束、三角肌中束、肱三头肌、上斜方肌',
    sets: '4组 × 6-10次',
    rest: '90秒',
    calories: 80,
    steps: [
      '在推举架上将杠铃调至胸口高度，双手正握杠铃，握距略宽于肩',
      '将杠铃取出，置于锁骨前方，挺胸收腹，核心收紧',
      '呼气，发力将杠铃推举至头顶上方，手臂自然伸直',
      '吸气，控制杠铃缓慢下放至锁骨起始位置'
    ],
    tips: '推举时收紧臀部和核心，不要过度挺腰，杠铃轨迹尽量垂直',
    demo: '🏋️'
  },

  // ==================== 手臂 arms ====================
  {
    id: 'barbell_curl',
    name: '杠铃弯举',
    category: 'arms',
    categoryName: '手臂',
    equipment: '杠铃',
    difficulty: '初级',
    muscle: '肱二头肌、肱肌、前臂',
    sets: '4组 × 8-12次',
    rest: '60秒',
    calories: 50,
    steps: [
      '双脚与肩同宽站立，双手反握杠铃，握距与肩同宽',
      '挺胸收腹，肘部紧贴身体两侧，杠铃置于大腿前方',
      '呼气，用二头肌发力将杠铃弯举至肩部前方',
      '吸气，控制杠铃缓慢下放至起始位置'
    ],
    tips: '肘部固定不动不要前后移动，不要用身体晃动借力',
    demo: '💪'
  },
  {
    id: 'dumbbell_curl',
    name: '哑铃弯举',
    category: 'arms',
    categoryName: '手臂',
    equipment: '哑铃',
    difficulty: '初级',
    muscle: '肱二头肌、肱肌、前臂',
    sets: '4组 × 8-12次（每侧）',
    rest: '60秒',
    calories: 50,
    steps: [
      '双脚与肩同宽站立，双手持哑铃于身体两侧，掌心朝内',
      '挺胸收腹，肘部紧贴身体两侧',
      '呼气，一只手弯举哑铃，同时手腕外旋（掌心转向上）',
      '吸气，控制哑铃缓慢下放，换另一只手重复'
    ],
    tips: '可交替做也可同时做，注意顶峰收缩停顿1秒，下放要慢',
    demo: '💪'
  },
  {
    id: 'hammer_curl',
    name: '锤式弯举',
    category: 'arms',
    categoryName: '手臂',
    equipment: '哑铃',
    difficulty: '初级',
    muscle: '肱肌、肱桡肌、肱二头肌',
    sets: '4组 × 8-12次',
    rest: '60秒',
    calories: 50,
    steps: [
      '双脚与肩同宽站立，双手持哑铃于身体两侧，掌心相对',
      '挺胸收腹，肘部紧贴身体两侧，手腕保持中立',
      '呼气，像拿锤子一样将哑铃弯举至肩部前方',
      '吸气，控制哑铃缓慢下放至起始位置'
    ],
    tips: '手腕全程保持中立不旋转，能更好刺激肱肌和前臂',
    demo: '🔨'
  },
  {
    id: 'cable_pushdown',
    name: '绳索下压',
    category: 'arms',
    categoryName: '手臂',
    equipment: '龙门架绳索+直杆或绳索',
    difficulty: '初级',
    muscle: '肱三头肌',
    sets: '4组 × 10-15次',
    rest: '45-60秒',
    calories: 45,
    steps: [
      '将绳索滑轮调至高位，双手握住直杆或绳索手柄',
      '站直，挺胸收腹，肘部紧贴身体两侧固定',
      '呼气，用三头肌发力将杆向下压至手臂完全伸直',
      '吸气，控制杆缓慢回到起始位置（肘部弯曲约90度）'
    ],
    tips: '肘部全程夹紧不动，只有前臂运动，顶峰收缩停顿1秒',
    demo: '🏋️'
  },
  {
    id: 'dumbbell_overhead_triceps_extension',
    name: '哑铃颈后臂屈伸',
    category: 'arms',
    categoryName: '手臂',
    equipment: '哑铃',
    difficulty: '初级',
    muscle: '肱三头肌（长头）',
    sets: '4组 × 10-12次',
    rest: '60秒',
    calories: 45,
    steps: [
      '坐或站立，双手托住一个哑铃的一端，举至头顶上方',
      '上臂保持固定垂直，肘部贴近耳朵两侧',
      '吸气，控制哑铃缓慢下放至颈后',
      '呼气，用三头肌发力将哑铃举回起始位置'
    ],
    tips: '上臂保持不动，只有前臂运动，肘部不要向外打开',
    demo: '💪'
  },
  {
    id: 'narrow_push_up',
    name: '窄距俯卧撑',
    category: 'arms',
    categoryName: '手臂',
    equipment: '徒手',
    difficulty: '初级',
    muscle: '肱三头肌、胸大肌、三角肌前束',
    sets: '4组 × 8-15次',
    rest: '45-60秒',
    calories: 40,
    steps: [
      '双手撑地，间距与肩同宽或略窄，身体保持一条直线',
      '收紧核心，夹紧臀部，肘部贴近身体两侧',
      '吸气，弯曲手臂将身体下放至胸部接近地面',
      '呼气，发力将身体推起至起始位置'
    ],
    tips: '肘部贴近身体夹紧，三头肌参与更多，新手可先做跪姿版本',
    demo: '💪'
  },

  // ==================== 腿部 legs ====================
  {
    id: 'barbell_squat',
    name: '杠铃深蹲',
    category: 'legs',
    categoryName: '腿部',
    equipment: '杠铃+深蹲架',
    difficulty: '中级',
    muscle: '股四头肌、臀大肌、腘绳肌、核心',
    sets: '4组 × 8-12次',
    rest: '90-120秒',
    calories: 100,
    steps: [
      '将杠铃置于深蹲架上肩部高度位置，杠铃放在斜方肌上（高杠位）',
      '双手握杠，肘部向后拉，收紧背部，从架上取出杠铃后退一步',
      '双脚与肩同宽或略宽，脚尖微外八，吸气，屈膝屈髋下蹲至大腿与地面平行',
      '呼气，脚跟蹬地发力站起至起始位置'
    ],
    tips: '膝盖方向与脚尖一致，不要内扣，核心全程收紧，背部保持平直',
    demo: '🏋️'
  },
  {
    id: 'leg_press',
    name: '腿举',
    category: 'legs',
    categoryName: '腿部',
    equipment: '腿举机',
    difficulty: '初级',
    muscle: '股四头肌、臀大肌、腘绳肌',
    sets: '4组 × 10-15次',
    rest: '90秒',
    calories: 85,
    steps: [
      '坐在腿举机上，背部和臀部贴紧靠背，双脚与肩同宽踩在踏板中部',
      '脚尖微外八，双手握住两侧手柄，解除安全锁',
      '吸气，屈膝让踏板缓慢下降至膝盖弯曲约90度',
      '呼气，脚掌发力将踏板推回起始位置，注意不要完全锁死膝盖'
    ],
    tips: '下放幅度不要过低以免伤腰，推起时膝盖不锁死，脚掌着力点决定刺激偏重',
    demo: '🦵'
  },
  {
    id: 'leg_curl',
    name: '腿弯举',
    category: 'legs',
    categoryName: '腿部',
    equipment: '腿弯举机',
    difficulty: '初级',
    muscle: '腘绳肌',
    sets: '4组 × 10-15次',
    rest: '60秒',
    calories: 50,
    steps: [
      '俯卧在腿弯举机上，小腿后侧贴住滚筒垫',
      '调整位置使膝关节对齐机器转轴，双手握住前方手柄',
      '呼气，用腘绳肌发力将滚筒向臀部方向弯曲',
      '吸气，控制重量缓慢回到起始位置'
    ],
    tips: '臀部不要抬起借力，下放时控制速度，顶峰收缩停顿1秒',
    demo: '🦵'
  },
  {
    id: 'leg_extension',
    name: '腿屈伸',
    category: 'legs',
    categoryName: '腿部',
    equipment: '腿屈伸机',
    difficulty: '初级',
    muscle: '股四头肌',
    sets: '4组 × 12-15次',
    rest: '45-60秒',
    calories: 50,
    steps: [
      '坐在腿屈伸机上，小腿前侧贴住滚筒垫，调整位置使膝关节对齐转轴',
      '背部贴紧靠背，双手握住两侧手柄',
      '呼气，用股四头肌发力将小腿向上踢至完全伸直',
      '吸气，控制重量缓慢回到起始位置'
    ],
    tips: '顶峰收缩停顿1秒，下放时控制速度，不要用大重量猛甩',
    demo: '🦵'
  },
  {
    id: 'bulgarian_split_squat',
    name: '保加利亚分腿蹲',
    category: 'legs',
    categoryName: '腿部',
    equipment: '哑铃+卧推凳',
    difficulty: '中级',
    muscle: '股四头肌、臀大肌、腘绳肌',
    sets: '4组 × 8-12次（每侧）',
    rest: '60秒',
    calories: 70,
    steps: [
      '背对卧推凳站立，将一只脚背搭在凳面上，前脚向前迈一步',
      '双手持哑铃自然下垂，挺胸收腹，身体保持直立',
      '吸气，屈膝下蹲至前腿大腿与地面平行，后膝接近地面',
      '呼气，前脚脚跟发力站起至起始位置'
    ],
    tips: '前脚着力点在脚跟，膝盖方向与脚尖一致，上身不要过度前倾',
    demo: '🦵'
  },
  {
    id: 'hip_thrust',
    name: '臀推',
    category: 'legs',
    categoryName: '腿部',
    equipment: '杠铃+卧推凳',
    difficulty: '初级',
    muscle: '臀大肌、腘绳肌',
    sets: '4组 × 10-15次',
    rest: '60-90秒',
    calories: 70,
    steps: [
      '上背靠在卧推凳边缘，双脚踩实地面与肩同宽，杠铃放在髋部',
      '在杠铃和髋部之间垫一块垫子（如有），双手稳住杠铃',
      '呼气，脚跟蹬地发力，将髋部向上推至身体与地面平行',
      '吸气，控制髋部缓慢下放至起始位置'
    ],
    tips: '顶峰收缩时夹紧臀部停顿1-2秒，下巴微收，不要过度挺腰',
    demo: '🍑'
  },
  {
    id: 'lunge',
    name: '箭步蹲',
    category: 'legs',
    categoryName: '腿部',
    equipment: '哑铃',
    difficulty: '初级',
    muscle: '股四头肌、臀大肌、腘绳肌',
    sets: '4组 × 10-12次（每侧）',
    rest: '60秒',
    calories: 65,
    steps: [
      '双脚与肩同宽站立，双手持哑铃自然下垂于身体两侧',
      '挺胸收腹，核心收紧，身体保持直立',
      '吸气，一只脚向前迈一大步，屈膝下蹲至前腿大腿与地面平行',
      '呼气，前脚脚跟发力将身体推回起始位置，换另一侧'
    ],
    tips: '前膝不超过脚尖太多，后膝接近地面但不触地，上身保持直立',
    demo: '🦵'
  },

  // ==================== 核心 core ====================
  {
    id: 'plank',
    name: '平板支撑',
    category: 'core',
    categoryName: '核心',
    equipment: '徒手',
    difficulty: '初级',
    muscle: '腹横肌、腹直肌、腹斜肌',
    sets: '4组 × 30-60秒',
    rest: '45秒',
    calories: 30,
    steps: [
      '俯卧，前臂撑地，肘关节在肩部正下方',
      '双脚并拢或略分开，脚尖撑地',
      '收紧核心和臀部，身体从头到脚保持一条直线',
      '保持自然呼吸，坚持目标时间'
    ],
    tips: '不要塌腰或撅臀，臀部不要翘起，核心全程保持紧绷',
    demo: '🧘'
  },
  {
    id: 'crunch',
    name: '卷腹',
    category: 'core',
    categoryName: '核心',
    equipment: '徒手/瑜伽垫',
    difficulty: '初级',
    muscle: '腹直肌',
    sets: '4组 × 15-20次',
    rest: '45秒',
    calories: 30,
    steps: [
      '仰卧在瑜伽垫上，双膝弯曲，双脚踩实地面',
      '双手轻放在耳旁或交叉于胸前，不要抱头拉颈',
      '呼气，用腹部发力将肩胛骨微微抬离地面',
      '吸气，控制身体缓慢回到起始位置'
    ],
    tips: '下背部始终贴地，起身幅度不用太大，重点感受腹部收缩',
    demo: '🧘'
  },
  {
    id: 'hanging_leg_raise',
    name: '悬垂举腿',
    category: 'core',
    categoryName: '核心',
    equipment: '单杠',
    difficulty: '中级',
    muscle: '腹直肌（下束）、髂腰肌',
    sets: '4组 × 8-12次',
    rest: '60秒',
    calories: 45,
    steps: [
      '双手正握单杠，身体自然悬垂，手臂伸直',
      '收紧核心，控制身体不要前后晃动',
      '呼气，用腹部发力将双腿抬至与地面平行或更高',
      '吸气，控制双腿缓慢下放至起始位置'
    ],
    tips: '不要用惯性甩腿，新手可先做屈膝版（抬膝盖），下放时控制速度',
    demo: '🤸'
  },
  {
    id: 'russian_twist',
    name: '俄罗斯转体',
    category: 'core',
    categoryName: '核心',
    equipment: '哑铃或药球',
    difficulty: '初级',
    muscle: '腹斜肌、腹直肌',
    sets: '4组 × 15-20次（每侧）',
    rest: '45秒',
    calories: 35,
    steps: [
      '坐在瑜伽垫上，双膝弯曲，脚跟可触地或微微抬起',
      '身体后倾约45度，双手持哑铃或药球于胸前',
      '呼气，用腹部发力将上身转向一侧，双手跟随移动',
      '吸气，回到中间后转向另一侧，左右交替进行'
    ],
    tips: '转动时感受腹斜肌发力，背部保持平直，不要用惯性快速转',
    demo: '🔄'
  },
  {
    id: 'lying_leg_raise',
    name: '仰卧举腿',
    category: 'core',
    categoryName: '核心',
    equipment: '徒手/瑜伽垫',
    difficulty: '初级',
    muscle: '腹直肌（下束）、髂腰肌',
    sets: '4组 × 12-15次',
    rest: '45秒',
    calories: 30,
    steps: [
      '仰卧在瑜伽垫上，双手放在臀部下方或身体两侧',
      '双腿并拢自然伸直，脚尖微绷',
      '呼气，用腹部发力将双腿抬至与地面垂直',
      '吸气，控制双腿缓慢下放至接近地面（不触地）'
    ],
    tips: '下背部始终贴地，下放时控制速度，不要让腰部拱起',
    demo: '🧘'
  },
  {
    id: 'cable_crunch',
    name: '缆绳卷腹',
    category: 'core',
    categoryName: '核心',
    equipment: '龙门架绳索+绳索手柄',
    difficulty: '初级',
    muscle: '腹直肌',
    sets: '4组 × 12-15次',
    rest: '45秒',
    calories: 40,
    steps: [
      '将绳索调至高位，跪在绳索下方，双手握住绳索手柄置于头两侧',
      '身体跪姿，髋部固定不动，背部微弓',
      '呼气，用腹部发力将肘部拉向大腿方向，身体向前卷曲',
      '吸气，控制身体缓慢回到起始位置'
    ],
    tips: '髋部固定不动，只有脊柱弯曲卷腹，顶峰收缩停顿1秒',
    demo: '🏋️'
  },

  // ==================== 有氧 cardio ====================
  {
    id: 'treadmill',
    name: '跑步机',
    category: 'cardio',
    categoryName: '有氧',
    equipment: '跑步机',
    difficulty: '初级',
    muscle: '全身（心肺系统）',
    sets: '1组 × 20-40分钟',
    rest: '—',
    calories: 250,
    steps: [
      '上跑步机前先设置好速度和坡度，扶住扶手站稳',
      '从慢走开始热身，逐渐加速到目标配速',
      '保持自然呼吸节奏，目视前方，手臂自然摆动',
      '结束后逐渐减速，慢走2-3分钟冷身再下机'
    ],
    tips: '新手建议先走跑结合，坡度调1-2模拟户外环境，保护膝盖',
    demo: '🏃'
  },
  {
    id: 'elliptical',
    name: '椭圆机',
    category: 'cardio',
    categoryName: '有氧',
    equipment: '椭圆机',
    difficulty: '初级',
    muscle: '全身（心肺系统、上下肢）',
    sets: '1组 × 20-40分钟',
    rest: '—',
    calories: 220,
    steps: [
      '调整椭圆机踏板和手柄高度，双脚踩上踏板',
      '双手握住活动手柄，挺胸收腹，身体保持直立',
      '同时蹬腿和推拉手柄，开始椭圆运动',
      '保持稳定节奏，结束后逐渐降低阻力冷身'
    ],
    tips: '对膝盖冲击小，适合大体重人群，可用阻力调节强度',
    demo: '🚶'
  },
  {
    id: 'rowing_machine',
    name: '划船机',
    category: 'cardio',
    categoryName: '有氧',
    equipment: '划船机',
    difficulty: '初级',
    muscle: '全身（背、腿、核心、心肺）',
    sets: '1组 × 15-30分钟',
    rest: '—',
    calories: 200,
    steps: [
      '坐在划船机上，双脚固定在踏板上，双手握住手柄',
      '身体前倾，膝盖弯曲，手臂伸直，这是"抓水"起始位',
      '呼气，先蹬腿，再身体后倾，最后拉手柄至肋骨下方',
      '吸气，反向顺序回位：伸手→身体前倾→屈膝回到起始位'
    ],
    tips: '发力顺序是腿→核心→手臂，回位顺序相反，不要用手臂硬拉',
    demo: '🚣'
  },
  {
    id: 'jump_rope',
    name: '跳绳',
    category: 'cardio',
    categoryName: '有氧',
    equipment: '跳绳',
    difficulty: '初级',
    muscle: '全身（小腿、核心、心肺）',
    sets: '4组 × 1-3分钟',
    rest: '30-60秒',
    calories: 180,
    steps: [
      '选择合适长度的跳绳，双脚踩在绳子中间，手柄到腋下为宜',
      '双手握柄置于身体两侧，大臂贴近身体',
      '用手腕（不是手臂）甩绳，前脚掌着地轻盈跳跃',
      '保持自然呼吸，绳子过脚时跳跃高度刚好即可'
    ],
    tips: '前脚掌着地缓冲，膝盖微曲，跳跃幅度不用太大，新手可先无绳练节奏',
    demo: '🤸'
  }
];

if (typeof module !== 'undefined') module.exports = EXERCISES;

import { ResponseSchema } from 'src/models/responseSchema.entity';
import { RECORD_STATUS } from 'src/enums';
import { ObjectId } from 'mongodb';

export const mockSensitiveResponseSchema: ResponseSchema = {
  _id: new ObjectId('65f29f8892862d6a9067ad25'),
  curStatus: {
    status: RECORD_STATUS.PUBLISHED,
    date: 1710399368439,
  },
  statusList: [
    {
      status: RECORD_STATUS.PUBLISHED,
      date: 1710399368439,
    },
  ],
  createDate: 1710399368440,
  updateDate: 1710399368440,
  title: '加密全流程',
  surveyPath: 'EBzdmnSp',
  code: {
    bannerConf: {
      titleConfig: {
        mainTitle:
          '<h3 style="text-align: center">欢迎填写问卷</h3><p>为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，<span style="color: rgb(204, 0, 0)">期待您的参与！</span></p>',
        subTitle: '',
      },
      bannerConfig: {
        bgImage: '/imgs/skin/17e06b7604a007e1d3e1453b9ddadc3c.webp',
        videoLink: '',
        postImg: '',
      },
    },
    baseConf: {
      beginTime: '2024-03-14 14:54:41',
      endTime: '2034-03-14 14:54:41',
      language: 'chinese',
      tLimit: 0,
      answerBegTime: '',
      answerEndTime: '',
    },
    bottomConf: {
      logoImage: '/imgs/Logo.webp',
      logoImageWidth: '60%',
    },
    skinConf: {
      backgroundConf: {
        color: '#fff',
        type: 'color',
        image: '',
      },
      themeConf: {
        color: '#ffa600',
      },
      contentConf: {
        opacity: 100,
      },
      skinColor: '#4a4c5b',
      inputBgColor: '#ffffff',
    },
    submitConf: {
      submitTitle: '提交',
      msgContent: {
        msg_200: '提交成功',
        msg_9001: '您来晚了，感谢支持问卷~',
        msg_9002: '请勿多次提交！',
        msg_9003: '您来晚了，已经满额！',
        msg_9004: '提交失败！',
      },
      confirmAgain: {
        is_again: true,
        again_text: '确认要提交吗？',
      },
    },
    dataConf: {
      dataList: [
        {
          isRequired: true,
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'text',
          valid: '',
          field: 'data458',
          title: '<p>您的手机号</p>',
          placeholder: '',
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          star: 5,
          nps: {
            leftText: '极不满意',
            rightText: '极满意',
          },
          placeholderDesc: '',
          textRange: {
            min: {
              placeholder: '0',
              value: 0,
            },
            max: {
              placeholder: '500',
              value: 500,
            },
          },
        },
        {
          isRequired: true,
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'radio',
          placeholderDesc: '',
          field: 'data515',
          title: '<p>您的性别</p>',
          placeholder: '',
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          options: [
            {
              text: '<p>男</p>',
              others: false,
              mustOthers: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '115019',
            },
            {
              text: '<p>女</p>',
              others: false,
              mustOthers: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '115020',
            },
          ],
          importKey: 'single',
          importData: '',
          cOption: '',
          cOptions: [],
          nps: {
            leftText: '极不满意',
            rightText: '极满意',
          },
          star: 5,
          exclude: false,
          textRange: {
            min: {
              placeholder: '0',
              value: 0,
            },
            max: {
              placeholder: '500',
              value: 500,
            },
          },
        },
        {
          field: 'data450',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'text',
          placeholderDesc: '',
          title: '<p>身份证</p>',
          placeholder: '',
          valid: '',
          isRequired: true,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '选项1',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '979954',
            },
            {
              text: '选项2',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '083007',
            },
          ],
          star: 5,
          textRange: {
            min: {
              placeholder: '0',
              value: 0,
            },
            max: {
              placeholder: '500',
              value: 500,
            },
          },
        },
        {
          field: 'data405',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'text',
          placeholderDesc: '',
          title: '<p>地址</p>',
          placeholder: '',
          valid: '',
          isRequired: true,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '选项1',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '443109',
            },
            {
              text: '选项2',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '871142',
            },
          ],
          star: 5,
          textRange: {
            min: {
              placeholder: '0',
              value: 0,
            },
            max: {
              placeholder: '500',
              value: 500,
            },
          },
        },
        {
          field: 'data770',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'text',
          placeholderDesc: '',
          title: '<p>邮箱</p>',
          placeholder: '',
          valid: '',
          isRequired: true,
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '选项1',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '051056',
            },
            {
              text: '选项2',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '835356',
            },
          ],
          star: 5,
          textRange: {
            min: {
              placeholder: '0',
              value: 0,
            },
            max: {
              placeholder: '500',
              value: 500,
            },
          },
        },
      ],
    },
  },
  pageId: '65f29f3192862d6a9067ad1c',
} as unknown as ResponseSchema;

export const mockResponseSchema: ResponseSchema = {
  _id: new ObjectId('65b0d46e04d5db18534c0f7c'),
  curStatus: {
    status: RECORD_STATUS.PUBLISHED,
    date: 1710340841287.0,
  },
  statusList: [
    {
      status: RECORD_STATUS.PUBLISHED,
      date: 1706018345927.0,
    },
  ],
  title: '新系统创建的',
  surveyPath: 'JgMLGInV',
  code: {
    bannerConf: {
      titleConfig: {
        mainTitle:
          '<h3 style="text-align: center">欢迎填写问卷</h3><p>为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，<span style="color: rgb(204, 0, 0)">期待您的参与！</span></p>',
        subTitle: '',
      },
      bannerConfig: {
        bgImage:
          'http://10.190.55.101:3000/imgs/skin/17e06b7604a007e1d3e1453b9ddadc3c.webp',
        videoLink: '',
        postImg: '',
      },
    },
    baseConf: {
      beginTime: '2024-01-23 21:59:05',
      endTime: '2034-01-23 21:59:05',
      language: 'chinese',
      tLimit: 0,
      answerBegTime: '',
      answerEndTime: '',
    },
    bottomConf: {
      logoImage: '/imgs/Logo.webp',
      logoImageWidth: '60%',
    },
    skinConf: {
      backgroundConf: {
        color: '#fff',
        type: 'color',
        image: '',
      },
      themeConf: {
        color: '#ffa600',
      },
      contentConf: {
        opacity: 100,
      },
      skinColor: '#4a4c5b',
      inputBgColor: '#ffffff',
    },
    submitConf: {
      submitTitle: '提交',
      msgContent: {
        msg_200: '<p>提交成功</p>',
        msg_9001: '您来晚了，感谢支持问卷~',
        msg_9002: '请勿多次提交！',
        msg_9003: '您来晚了，已经满额！',
        msg_9004: '提交失败！',
      },
      confirmAgain: {
        is_again: true,
        again_text: '确认要提交吗？',
      },
    },
    dataConf: {
      dataList: [
        {
          isRequired: true,
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'text',
          valid: '',
          field: 'data458',
          title: '标题1',
          placeholder: '',
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          star: 5,
          nps: {
            leftText: '极不满意',
            rightText: '极满意',
          },
          placeholderDesc: '',
        },
        {
          field: 'data549',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'textarea',
          placeholderDesc: '',
          title: '标题2',
          placeholder: '',
          valid: '',
          isRequired: true,
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '选项1',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '273008',
            },
            {
              text: '选项2',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '160703',
            },
          ],
          star: 5,
        },
        {
          isRequired: true,
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'radio',
          placeholderDesc: '',
          field: 'data515',
          title: '标题2',
          placeholder: '',
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          options: [
            {
              text: '<p>选项1</p>',
              others: true,
              mustOthers: false,
              othersKey: 'data515_115019',
              placeholderDesc: '',
              hash: '115019',
            },
            {
              text: '<p>选项2</p>',
              others: false,
              mustOthers: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '115020',
            },
            {
              text: '<p>选项</p>',
              others: false,
              mustOthers: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '119074',
            },
          ],
          importKey: 'single',
          importData: '',
          cOption: '',
          cOptions: [],
          nps: {
            leftText: '极不满意',
            rightText: '极满意',
          },
          star: 5,
        },
        {
          field: 'data997',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'checkbox',
          placeholderDesc: '',
          title: '标题4',
          placeholder: '',
          valid: '',
          isRequired: true,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '<p>选项1</p>',
              others: true,
              othersKey: 'data997_211974',
              placeholderDesc: '',
              hash: '211974',
            },
            {
              text: '<p>选项2</p>',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '842501',
            },
            {
              text: '<p>选项</p>',
              others: false,
              othersKey: 'data997_211974',
              placeholderDesc: '',
              hash: '650873',
            },
          ],
          star: 5,
        },
        {
          field: 'data517',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'binary-choice',
          placeholderDesc: '',
          title: '标题5',
          placeholder: '',
          valid: '',
          isRequired: true,
          randomSort: false,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '对',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '917392',
            },
            {
              text: '错',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '156728',
            },
          ],
          star: 5,
        },
        {
          field: 'data413',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'radio-star',
          placeholderDesc: '',
          title: '标题6',
          placeholder: '',
          valid: '',
          isRequired: true,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {
            '1': {
              isShowInput: true,
              text: '',
              required: false,
              explain: '',
            },
            '2': {
              isShowInput: true,
              text: '',
              required: false,
              explain: '',
            },
            '3': {
              isShowInput: true,
              text: '',
              required: false,
              explain: '',
            },
            '4': {
              isShowInput: false,
              text: '',
              required: false,
              explain: '',
            },
            '5': {
              isShowInput: false,
              text: '',
              required: false,
              explain: '',
            },
          },
          options: [
            {
              text: '选项1',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '502734',
            },
            {
              text: '选项2',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '278946',
            },
          ],
          star: 5,
        },
        {
          field: 'data863',
          showIndex: true,
          showType: true,
          showSpliter: true,
          type: 'vote',
          placeholderDesc: '',
          title: '标题7',
          placeholder: '',
          valid: '',
          isRequired: true,
          checked: false,
          minNum: '',
          maxNum: '',
          starStyle: 'star',
          rangeConfig: {},
          options: [
            {
              text: '<p>选项1</p>',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '109239',
            },
            {
              text: '<p>选项2</p>',
              others: false,
              othersKey: '',
              placeholderDesc: '',
              hash: '899262',
            },
          ],
          star: 5,
          innerType: 'radio',
        },
      ],
    },
  },
  pageId: '65afc62904d5db18534c0f78',
  createDate: 1710340841289,
  updateDate: 1710340841289.0,
} as unknown as ResponseSchema;

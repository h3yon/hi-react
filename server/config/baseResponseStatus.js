module.exports = {
  // Success
  SUCCESS_GET_POSTS: { "isSuccess": true, "code": 200, "message": "게시글 목록 조회 성공" },
  SUCCESS_GET_POST: { "isSuccess": true, "code": 200, "message": "게시글 조회 성공" },
  SUCCESS_ADD_POST: { "isSuccess": true, "code": 200, "message": "게시글 작성 성공" },
  SUCCESS_DELETE_POST: { "isSuccess": true, "code": 200, "message": "게시글 삭제 성공" },
  SUCCESS_PATCH_POST: { "isSuccess": true, "code": 200, "message": "게시글 수정 성공" },

  // Fail
  FAIL_GET_POSTS: { "isSuccess": false, "code": 100, "message": "게시글 목록 조회 실패" },
  FAIL_GET_POST: { "isSuccess": false, "code": 100, "message": "게시글 조회 실패" },
  FAIL_ADD_POST: { "isSuccess": false, "code": 100, "message": "게시글 작성 실패" },
  FAIL_DELETE_POST: { "isSuccess": false, "code": 100, "message": "게시글 삭제 실패" },
  FAIL_PATCH_POST: { "isSuccess": false, "code": 100, "message": "게시글 수정 실패" },

  // Common
  TOKEN_EMPTY: { "isSuccess": false, "code": 300, "message": "JWT 토큰을 입력해주세요." },
  TOKEN_VERIFICATION_SUCCESS: { "isSuccess": true, "code": 301, "message": "JWT 토큰 검증 성공" },
  TOKEN_VERIFICATION_FAILURE: { "isSuccess": false, "code": 302, "message": "JWT 토큰 검증 실패" },

  //Request, Response error
  CHECK_INPUT_PARAMETER: { "isSuccess": false, "code": 400, "message": "입력값을 확인해주세요" },

  // // Response error
  // SIGNIN_INACTIVE_ACCOUNT: { "isSuccess": false, "code": 500, "message": "비활성화되어 있거나 탈퇴된 회원입니다" },

  //Connection, Transaction 등의 서버 오류
  DB_ERROR: { "isSuccess": false, "code": 501, "message": "데이터 베이스 에러" },
  SERVER_ERROR: { "isSuccess": false, "code": 500, "message": "서버 에러" },
};

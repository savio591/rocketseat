import 'package:dev_quiz/core/app_colors.dart';
import 'package:flutter/material.dart';

class QuizCardWidget extends StatelessWidget {
  const QuizCardWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          border: Border.fromBorderSide(BorderSide(color: AppColors.border)),
          color: AppColors.white,
          borderRadius: BorderRadius.circular(10)
          ),
      child: Column(
        children: [
          Container(
            width: 40,
            height: 40,
            color: Colors.red,
          )
        ],
      ),
    );
  }
}

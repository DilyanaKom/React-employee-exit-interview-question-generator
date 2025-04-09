export default function QuestionItem({content, questionNumber}){
    return (
        <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question {questionNumber}</h3>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    )
}
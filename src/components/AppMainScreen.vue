<template>
	<section class="main-screen">
		<div class="main-screen__header">
			<h2 class="main-screen__heading">Questions Messenger</h2>
			<button class="main-screen__filter-button">All questions</button>
		</div>
		<ul class="main-screen__questions-list">
			<app-question-card
				class="main-screen__question-card"
				v-for="question in questionsArray"
				:questions="question"
				:key="question.id"
			></app-question-card>
		</ul>

		<app-questions-form class="main-screen__question-form" v-if="openedFolder"></app-questions-form>
	</section>
</template>

<script>
	import AppQuestionCard from "./AppQuestionCard";
	import AppQuestionsForm from "./AppQuestionsForm";

	export default {
		computed: {
			questionsData() {
				return this.$store.state.questionsData
			},
			openedFolder() {
				return this.$store.state.openedFolder
			},
			questionsArray() {
				return this.questionsData[this.openedFolder]
			}
		},
		methods: {},
		components: {
			AppQuestionCard,
			AppQuestionsForm,
		}
	}
</script>

<style lang="scss">
	.main-screen {
		margin: 0;
		padding: 0;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		background-color: #DAE8F3;
	}

	.main-screen__header {
		box-sizing: border-box;
		margin: 0;
		padding: 10px 20px 5px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		background-color: #fff;
	}

	.main-screen__heading {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 700;
		font-style: normal;
		font-size: 25px;
		line-height: 28px;
		color: #212121;
	}

	.main-screen__filter-button {
		position: relative;

		box-sizing: border-box;
		margin: 5px 0 0;
		padding: 5px 20px 5px 0;

		font-family: inherit;
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		line-height: 14px;
		color: #939393;
		text-decoration: none;

		background: none;
		border: none;
		cursor: pointer;

		&::before {
			content: "";
			position: absolute;
			top: 50%;
			right: 3px;

			display: block;
			width: 10px;
			height: 10px;

			background: url('../assets/arrow-drop-down.svg') center no-repeat;
			transform: translateY(-5px);
		}

		&::after {
			content: "";
			position: absolute;
			top: calc(100% - 3px);
			left: 0;

			display: block;
			width: 0;
			height: 1px;

			background: #4a4a4a;
			transition: all 0.3s ease-in-out;
		}

		&:hover,
		&:focus {
			outline: none;

			&::after {
				width: calc(100% - 20px);
			}
		}
	}

	.main-screen__questions-list {
		box-sizing: border-box;
		margin: 0;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		list-style: none;
		overflow-y: scroll;
	}

	.main-screen__question-card {
		margin: 0;

		&:not(:first-child) {
			margin-top: 20px;
		}
	}

	.main-screen__question-form {
		margin: auto 0 0;
	}
</style>

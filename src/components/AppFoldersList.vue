<template>
	<section class="folders">
		<h2 class="folders__heading">Messages</h2>
		<span class="folders__hint">history</span>
		<ul class="folders__list" v-if="Object.keys(questionsData).length !== 0">
			<li class="folders__item"
					:class="{'folders__item--active': openedFolder === folder}"
					v-for="(messages, folder) in questionsData"
			>
				<button class="folders__button"
								@click="openFolder(messages, folder)"
				>
					{{ folder }} ({{ messages.length }})
				</button>
				<button class="folders__del-folder" @click="deleteFolder(folder)">
					<span class="visually-hidden">Удалить</span>
				</button>
			</li>
		</ul>
		<span class="folders__no-item-text" v-else>
			Add your first folder!
		</span>
		<form class="folders__form" action="#">
			<label class="folders__label" for="folders-input">Add folder</label>
			<div class="folders__input-wrapper">
				<input class="folders__input"
							 id="folders-input"
							 type="text"
							 name="folder"
							 v-model="inputData"
				>
				<button class="folders__submit-button" @click.prevent="addFolder">
					<span class="visually-hidden">Добавить новый раздел</span>
				</button>
			</div>
		</form>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				inputData: '',
			}
		},
		computed: {
			questionsData() {
				return this.$store.state.questionsData
			},
			openedFolder() {
				return this.$store.state.openedFolder
			}
		},
		methods: {
			addFolder() {
				if (this.inputData) {
					this.$store.commit('addFolder', this.inputData)
				}
				this.inputData= ''
			},
			deleteFolder(folder) {
				this.$store.commit('deleteFolder', folder)
				if (folder === this.openedFolder) {
					this.$store.commit('closeFolder')
				}
			},
			openFolder(messages, folder) {
				this.$store.commit('changeOpenedFolder', folder)
			},
		},
	}
</script>

<style lang="scss">
	.folders {
		box-sizing: border-box;
		margin: 0;
		padding: 10px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.folders__heading {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 500;
		font-style: normal;
		font-size: 22px;
		line-height: 24px;
		color: #ffffff;
	}

	.folders__hint {
		margin: 10px 0 0;
		padding: 0;

		font-family: inherit;
		font-weight: 300;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: rgba(#fff, 0.5);
	}

	.folders__list {
		margin: 20px 0 0;
		padding: 0;
		align-self: stretch;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		list-style: none;
	}

	.folders__no-item-text {
		margin: 40px 0 0;
		padding: 0;

		font-weight: 400;
		font-style: normal;
		font-size: 16px;
		line-height: 18px;
		color: #fff;
	}

	.folders__item {
		position: relative;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		transition: all 0.3s ease-in-out;

		&:not(:first-child) {
			margin-top: 10px;
		}

		&--active {
			border-radius: 5px;
			background: rgba(#fff, 0.3);
		}
	}

	.folders__button {
		position: relative;

		box-sizing: border-box;
		margin: 0;
		padding: 8px 5px 8px 30px;

		font-family: inherit;
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		line-height: 14px;
		color: #ffffff;
		text-decoration: none;
		text-align: left;

		background: transparent;
		border: none;
		border-radius: 5px;

		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			outline: none;
			background: rgba(#fff, 0.3);
		}

		&::before {
			content: '';
			position: absolute;
			top: 5px;
			left: 5px;

			display: block;
			width: 20px;
			height: 20px;

			background: url("../assets/inbox-icon.svg") center / cover no-repeat;
		}
	}

	.folders__del-folder {
		position: absolute;
		top: 5px;
		right: 10px;

		margin: 0;
		padding: 0;
		width: 20px;
		height: 20px;

		background: #e82f2f;
		border: none;
		border-radius: 50%;

		cursor: pointer;

		&::after {
			content: "";
			position: absolute;
			top: 3px;
			right: 3px;

			display: block;
			width: 14px;
			height: 14px;

			background: url("../assets/delete-icon.svg") center / cover no-repeat;
			border-radius: 50%;
		}
	}

	.folders__form {
		position: relative;

		margin: auto 0 0;
		padding: 0;
		align-self: stretch;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		&::before {
			content: "";
			position: absolute;
			top: -15px;
			left: -10px;
			right: 0;

			display: block;
			width: calc(100% + 20px);
			height: 1px;

			background-color: rgba(#e5e5e5, 0.3);
		}
	}

	.folders__label {
		margin: 0;
		padding: 0;

		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: #fff;
	}

	.folders__input-wrapper {
		margin: 15px 0 0;
		padding: 0;
		align-self: stretch;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.folders__input {
		box-sizing: border-box;
		margin: 0;
		padding: 5px 10px;

		font-weight: 300;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: #212121;

		background: #fff;
		border: 1px solid #c7c7c7;
		border-radius: 5px;

		cursor: pointer;
		resize: none;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			outline: none;
			border-color: #212121;
		}
	}

	.folders__submit-button {
		margin: 0;
		padding: 0;
		width: 25px;
		height: 25px;

		background: #1CB9ED url("../assets/add-icon.svg") center no-repeat;
		border: none;
		border-radius: 50%;

		cursor: pointer;
	}
</style>

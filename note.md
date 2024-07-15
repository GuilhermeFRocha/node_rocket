# 1 - Comandos para execuçao do codigo:

- npx knex migrate:make 'name table'

## Propósito
- Cria um novo arquivo de migração.

## Função
- Esta instrução gera um novo arquivo de migração na pasta especificada (geralmente migrations) com um nome que inclui a string fornecida (name table) e um timestamp único para garantir que cada arquivo de migração seja único.

## Exemplo
- Após executar este comando, um novo arquivo será criado com um nome similar a 20240713123456_name_table.js.

# 2 - Comandos para execuçao do codigo:

- npx knex migrate:latest

## Propósito
- Executa todas as migrações pendentes.

## Função
- Esta instrução aplica todas as migrações que ainda não foram executadas no banco de dados. Ele verifica a tabela de histórico de migrações e executa todas as migrações na ordem em que foram criadas

## Exemplo
- Após executar este comando, todas as migrações que ainda não foram aplicadas no banco de dados serão executadas, criando ou alterando tabelas conforme especificado nos arquivos de migração.

# 3 - Comandos para execuçao do codigo:

- npx knex migrate:rollback

## Propósito
- Desfaz a última migração executada.

## Função

- Esta instrução desfaz a última migração executada. Ele verifica a tabela de histórico de migrações e desfaz a última migração na ordem em que foram criadas.

## Exemplo

- Após executar este comando, a última migração executada será desfeita, removendo ou alterando tabelas conforme especificado nos arquivos de migração.

# 4 - Codigo de migraçao UP e DOWN

- Função up: Define as alterações a serem aplicadas ao banco de dados quando a migração é executada. Neste caso, está criando uma tabela transactions com duas colunas: id (UUID, chave primária) e title (string, não nula).

- Função down: Define as alterações a serem revertidas quando a migração é desfeita. Neste caso, está removendo a tabela transactions.
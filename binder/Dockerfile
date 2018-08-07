FROM jupyter/all-spark-notebook:177037d09156

RUN pip install --no-cache-dir vdom==0.5

RUN cd util/theme-superhero-datascience && npm install && npm run build \
 && jupyter labextension install

